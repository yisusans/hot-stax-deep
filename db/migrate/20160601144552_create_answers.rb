class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.references :user, null: false
      t.references :question, null: false
      t.string :answer, null: false
      t.string :is_best?, null: false, default: "false"

      t.timestamps null: false
    end
  end
end
