* ...
# chat space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index:true,null: false,unique:true|
|email|string|null: false,unique:true|
### Association
- has_many :groups_users
- has_many :groups,through::groups_users
- has_many :messages

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group|references|index:true,null: false, foreign_key: true|
|user|references|index:true,null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|sting|null: false,unique:true|
### Association
- has_many :groups_users
- has_many :users,through::groups_users
- has_many :messages

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|group|reference|null: false,foreign_key: true|
|user|reference|null: false,foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user