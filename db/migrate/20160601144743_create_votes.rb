class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :user, null: false
      t.integer :voteable_id
      t.integer :voteable_type

      t.timestamps, null: false
    end
  end
end
