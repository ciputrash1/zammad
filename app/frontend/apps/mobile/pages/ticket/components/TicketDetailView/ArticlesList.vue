<!-- Copyright (C) 2012-2023 Zammad Foundation, https://zammad-foundation.org/ -->

<script setup lang="ts">
// TODO scroll to bottom when data is loaded(?)
import { toRef, shallowRef } from 'vue'
import CommonSectionPopup from '@mobile/components/CommonSectionPopup/CommonSectionPopup.vue'
import ArticleBubble from './ArticleBubble.vue'
import ArticlesPullDown from './ArticlesPullDown.vue'
import ArticleSeparatorNew from './ArticleSeparatorNew.vue'
import ArticleSeparatorMore from './ArticleSeparatorMore.vue'
import ArticleSeparatorDate from './ArticleSeparatorDate.vue'
import type { TicketArticle } from '../../types/tickets'
import { useTicketArticleRows } from '../../composable/useTicketArticlesRows'
import { useTicketArticleContext } from '../../composable/useTicketArticleContext'
import ArticleSystem from './ArticleSystem.vue'

interface Props {
  articles: TicketArticle[]
  ticketInternalId: number
  totalCount: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'loadPrevious'): void
}>()

const { contextOptions, articleContextShown, showArticleContext } =
  useTicketArticleContext()

const articlesElement = shallowRef<HTMLElement>()
const loaderElement = shallowRef<{
  stopLoader(): void
}>()

const loadMoreArticles = () => {
  // start loading instead
  setTimeout(() => {
    loaderElement.value?.stopLoader()
  }, 1000)
}

const { rows } = useTicketArticleRows(
  toRef(props, 'articles'),
  toRef(props, 'totalCount'),
)

const filterAttachments = (article: TicketArticle) => {
  return article.attachments.filter(
    (file) => !file.preferences || !file.preferences['original-format'],
  )
}
</script>

<template>
  <section
    ref="articlesElement"
    role="group"
    aria-label="Articles"
    class="relative flex-1 space-y-5 px-4 pt-4"
  >
    <!-- TODO counter indicator, use role="timer" -->
    <!-- <button
      class="absolute -top-7 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-black"
    >
      <CommonIcon name="mobile-arrow-up" />
    </button> -->
    <template v-for="row in rows" :key="row.key">
      <ArticleBubble
        v-if="row.type === 'article-bubble'"
        :content="row.article.body"
        :user="row.article.createdBy"
        :internal="row.article.internal"
        :content-type="row.article.contentType"
        :position="
          row.article.sender?.name !== 'Customer' || row.article.internal
            ? 'left'
            : 'right'
        "
        :security="row.article.securityState"
        :ticket-internal-id="ticketInternalId"
        :article-id="row.article.id"
        :attachments="filterAttachments(row.article)"
        @show-context="showArticleContext(row.article, ticketInternalId)"
      />
      <ArticleSystem
        v-if="row.type === 'system'"
        :to="row.to"
        :subject="row.subject"
      />
      <ArticleSeparatorDate v-if="row.type === 'date'" :date="row.date" />
      <ArticleSeparatorNew v-if="row.type === 'new'" />
      <ArticleSeparatorMore
        v-if="row.type === 'more'"
        :count="row.count"
        @click="emit('loadPrevious')"
      />
    </template>
  </section>
  <CommonSectionPopup
    v-model:state="articleContextShown"
    :items="contextOptions"
    no-hide-on-select
    :z-index="9"
  />
  <ArticlesPullDown
    ref="loaderElement"
    :articles-element="articlesElement"
    @load="loadMoreArticles"
  />
</template>
