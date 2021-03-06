# == Schema Information
#
# Table name: endorsements
#
#  id          :integer          not null, primary key
#  skill_id    :integer
#  author_id   :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Endorsement < ApplicationRecord
  validates :skill_id, presence: true

  belongs_to :skill

  belongs_to :receiver,
    primary_key: :id,
    foreign_key: :receiver_id,
    class_name: :User

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end
