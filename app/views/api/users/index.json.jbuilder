@users.each do |user|
  json.set! user.email, user.id
end
