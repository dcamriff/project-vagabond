class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.text :description
      t.string :country
      t.string :picture
      t.integer :population

      t.timestamps
    end
  end
end
