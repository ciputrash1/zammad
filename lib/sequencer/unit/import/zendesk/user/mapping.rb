# Copyright (C) 2012-2023 Zammad Foundation, https://zammad-foundation.org/

class Sequencer::Unit::Import::Zendesk::User::Mapping < Sequencer::Unit::Base
  include ::Sequencer::Unit::Import::Common::Mapping::Mixin::ProvideMapped

  uses :resource, :login, :password, :roles, :groups, :organization_id, :image_source

  def process
    provide_mapped do
      {
        login:,
        firstname:       resource.name,
        lastname:        '', # makes sure name guessing is triggered for updating existing users. Which happens when importing a big list of users due to overlapping pagination.
        email:           resource.email,
        phone:           resource.phone,
        password:,
        active:          (!resource.suspended && resource.active) || false,
        groups:,
        roles:,
        note:            resource.notes,
        verified:        resource.verified,
        organization_id:,
        last_login:      resource.last_login_at,
        image_source:,
      }
    end
  end
end
