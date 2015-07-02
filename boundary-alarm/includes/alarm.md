## Alarm [/alarms/{?id}]

+ Parameters
  + id (number, optional) ... The id of the alarm.

+ Model (application/json)

    + Body

            :[](alarm-response.json)

### Save an Alarm [POST]
Save an Alarm Post.

+ Request (application/json)

    + Body

            :[](alarm-request.json)

    + Schema

            :[](alarm-schema.json)

+ Response 201

  [Alarm][]

+ Response 422 (application/json)

    + Body

            :[](alarm-errors.json)

### Delete an Alarm [DELETE]
Delete an Alarm.

+ Response 204

### Update an Alarm [PUT]
Update an Alarm.

+ Request (application/json)

    + Body

            :[](alarm-request.json)

    + Schema

            :[](alarm-schema.json)

+ Response 200

    [Alarm][]

+ Response 422 (application/json)

    + Body

            :[](alarm-errors.json)
