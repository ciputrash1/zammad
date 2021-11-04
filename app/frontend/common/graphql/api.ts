import * as Types from './types';

import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type ReactiveFunction<TParam> = () => TParam;
export type ObjectAttributeValuesFragment = { __typename?: 'ObjectAttributeValue', value?: string | null | undefined, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null | undefined, screens?: any | null | undefined, editable: boolean, active: boolean } };

export type LoginMutationVariables = Types.Exact<{
  login: Types.Scalars['String'];
  password: Types.Scalars['String'];
  fingerprint: Types.Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutations', login?: { __typename?: 'LoginPayload', sessionId: string } | null | undefined };

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutations', logout?: { __typename?: 'LogoutPayload', success: boolean } | null | undefined };

export type CurrentUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Queries', currentUser: { __typename?: 'User', firstname?: string | null | undefined, lastname?: string | null | undefined, objectAttributeValues: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null | undefined, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null | undefined, screens?: any | null | undefined, editable: boolean, active: boolean } }>, organization?: { __typename?: 'Organization', name: string, objectAttributeValues: Array<{ __typename?: 'ObjectAttributeValue', value?: string | null | undefined, attribute: { __typename?: 'ObjectManagerAttribute', name: string, display: string, dataType: string, dataOption?: any | null | undefined, screens?: any | null | undefined, editable: boolean, active: boolean } }> } | null | undefined } };

export type SessionIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SessionIdQuery = { __typename?: 'Queries', sessionId: string };

export const ObjectAttributeValuesFragmentDoc = gql`
    fragment objectAttributeValues on ObjectAttributeValue {
  attribute {
    name
    display
    dataType
    dataOption
    screens
    editable
    active
  }
  value
}
    `;
export const LoginDocument = gql`
    mutation login($login: String!, $password: String!, $fingerprint: String!) {
  login(login: $login, password: $password, fingerprint: $fingerprint) {
    sessionId
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     login: // value for 'login'
 *     password: // value for 'password'
 *     fingerprint: // value for 'fingerprint'
 *   },
 * });
 */
export function useLoginMutation(options: VueApolloComposable.UseMutationOptions<Types.LoginMutation, Types.LoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<Types.LoginMutation, Types.LoginMutationVariables>>) {
  return VueApolloComposable.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<Types.LoginMutation, Types.LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    success
  }
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLogoutMutation();
 */
export function useLogoutMutation(options: VueApolloComposable.UseMutationOptions<Types.LogoutMutation, Types.LogoutMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<Types.LogoutMutation, Types.LogoutMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<Types.LogoutMutation, Types.LogoutMutationVariables>(LogoutDocument, options);
}
export type LogoutMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<Types.LogoutMutation, Types.LogoutMutationVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    firstname
    lastname
    objectAttributeValues {
      ...objectAttributeValues
    }
    organization {
      name
      objectAttributeValues {
        ...objectAttributeValues
      }
    }
  }
}
    ${ObjectAttributeValuesFragmentDoc}`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a Vue component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCurrentUserQuery();
 */
export function useCurrentUserQuery(options: VueApolloComposable.UseQueryOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>(CurrentUserDocument, {}, options);
}
export type CurrentUserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>;
export const SessionIdDocument = gql`
    query sessionId {
  sessionId
}
    `;

/**
 * __useSessionIdQuery__
 *
 * To run a query within a Vue component, call `useSessionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSessionIdQuery();
 */
export function useSessionIdQuery(options: VueApolloComposable.UseQueryOptions<Types.SessionIdQuery, Types.SessionIdQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<Types.SessionIdQuery, Types.SessionIdQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<Types.SessionIdQuery, Types.SessionIdQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<Types.SessionIdQuery, Types.SessionIdQueryVariables>(SessionIdDocument, {}, options);
}
export type SessionIdQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<Types.SessionIdQuery, Types.SessionIdQueryVariables>;