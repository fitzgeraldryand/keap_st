@users.each do |user|
  json.set! user.email, true
end
