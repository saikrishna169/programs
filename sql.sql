SELECT
  channel.channel_id,
  channel.name AS channel_name,
  COUNT(channel_user.user_id) AS no_of_subscribers
FROM
  channel
  JOIN channel_user ON channel.channel_id = channel_user.channel_id
WHERE
  CAST(strftime('%Y', subscribed_datetime) AS INT) = 2018
GROUP BY
  channel.channel_id
ORDER BY
  no_of_subscribers DESC,
  channel_name ASC
LIMIT
  10;