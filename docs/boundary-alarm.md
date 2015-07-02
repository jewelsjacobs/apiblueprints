FORMAT: 1A
HOST: http://localhost:4007

# Alarm API
This API Blueprint represents the alarms api and mock server spec.

NOTE: This document is a **work in progress**.

# Group Alarm

## Alarm [/alarms/{?id}]

+ Parameters
  + id (number, optional) ... The id of the alarm.

+ Model (application/json)

    + Body

            {
                "id": 100,
                "name": "Metric Threshold Alarm 1",
                "metric": "MEMU",
                "plugin": null,
                "triggerInterval": 60000,
                "typeId": 3,
                "typeName": "Threshold",
                "familyId": 1,
                "familyName": "Threshold",
                "triggerPredicate": {
                    "agg": "avg",
                    "op": "gt",
                    "val": 9
                },
                "isDeleted": false,
                "isDisabled": false,
                "perHostNotify": true,
                "note": "",
                "actions": [],
                "hosts": [],
                "hostGroupId": 9,
                "projectId": 11,
                "accountId": 13,
                "timeoutInterval": 14400000
            }
            

### Save an Alarm [POST]
Save an Alarm Post.

+ Request (application/json)

    + Body

            {
                "id": 100,
                "name": "Metric Threshold Alarm 1",
                "metric": "MEMU",
                "plugin": null,
                "triggerInterval": 60000,
                "typeId": 3,
                "familyId": 1,
                "triggerPredicate": {
                    "agg": "avg",
                    "op": "gt",
                    "val": 9
                },
                "isDeleted": false,
                "isDisabled": false,
                "perHostNotify": true,
                "note": "",
                "actions": [],
                "hostGroupId": 9,
                "timeoutInterval": 14400000
            }
            

    + Schema

            {
              "$schema": "http://json-schema.org/draft-04/schema#",
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "name": {
                  "type": "string"
                },
                "metric": {
                  "type": "string"
                },
                "plugin": {
                  "type": ["string", "null"]
                },
                "triggerInterval": {
                  "type": "integer"
                },
                "typeId": {
                  "type": "integer"
                },
                "familyId": {
                  "type": "integer"
                },
                "triggerPredicate": {
                  "type": "object",
                  "properties": {
                    "agg": {
                      "type": "string"
                    },
                    "op": {
                      "type": "string"
                    },
                    "val": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "agg",
                    "op",
                    "val"
                  ]
                },
                "isDeleted": {
                  "type": "boolean"
                },
                "isDisabled": {
                  "type": "boolean"
                },
                "perHostNotify": {
                  "type": "boolean"
                },
                "note": {
                  "type": "string"
                },
                "actions": {
                  "type": "array"
                },
                "hostGroupId": {
                  "type": "integer"
                },
                "timeoutInterval": {
                  "type": "integer"
                }
              },
              "required": [
                "name",
                "metric",
                "triggerInterval",
                "typeId",
                "familyId",
                "isDeleted",
                "isDisabled",
                "perHostNotify"
              ]
            }
            

+ Response 201

  [Alarm][]

+ Response 422 (application/json)

    + Body

            {
                "errors": [
                    {
                        "instance": "alarm",
                        "field": "triggerPredicate.agg",
                        "error": "required",
                        "schema": {
                            "type": "string",
                            "required": true
                        }
                    },
                    {
                        "instance": "alarm",
                        "field": "triggerPredicate.op",
                        "error": "required",
                        "schema": {
                            "type": "string",
                            "required": true
                        }
                    },
                    {
                        "instance": "alarm",
                        "field": "triggerPredicate.val",
                        "error": "required",
                        "schema": {
                            "type": "number",
                            "required": true
                        }
                    }
                ]
            }
            

### Delete an Alarm [DELETE]
Delete an Alarm.

+ Response 204

### Update an Alarm [PUT]
Update an Alarm.

+ Request (application/json)

    + Body

            {
                "id": 100,
                "name": "Metric Threshold Alarm 1",
                "metric": "MEMU",
                "plugin": null,
                "triggerInterval": 60000,
                "typeId": 3,
                "familyId": 1,
                "triggerPredicate": {
                    "agg": "avg",
                    "op": "gt",
                    "val": 9
                },
                "isDeleted": false,
                "isDisabled": false,
                "perHostNotify": true,
                "note": "",
                "actions": [],
                "hostGroupId": 9,
                "timeoutInterval": 14400000
            }
            

    + Schema

            {
              "$schema": "http://json-schema.org/draft-04/schema#",
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "name": {
                  "type": "string"
                },
                "metric": {
                  "type": "string"
                },
                "plugin": {
                  "type": ["string", "null"]
                },
                "triggerInterval": {
                  "type": "integer"
                },
                "typeId": {
                  "type": "integer"
                },
                "familyId": {
                  "type": "integer"
                },
                "triggerPredicate": {
                  "type": "object",
                  "properties": {
                    "agg": {
                      "type": "string"
                    },
                    "op": {
                      "type": "string"
                    },
                    "val": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "agg",
                    "op",
                    "val"
                  ]
                },
                "isDeleted": {
                  "type": "boolean"
                },
                "isDisabled": {
                  "type": "boolean"
                },
                "perHostNotify": {
                  "type": "boolean"
                },
                "note": {
                  "type": "string"
                },
                "actions": {
                  "type": "array"
                },
                "hostGroupId": {
                  "type": "integer"
                },
                "timeoutInterval": {
                  "type": "integer"
                }
              },
              "required": [
                "name",
                "metric",
                "triggerInterval",
                "typeId",
                "familyId",
                "isDeleted",
                "isDisabled",
                "perHostNotify"
              ]
            }
            

+ Response 200

    [Alarm][]

+ Response 422 (application/json)

    + Body

            {
                "errors": [
                    {
                        "instance": "alarm",
                        "field": "triggerPredicate.agg",
                        "error": "required",
                        "schema": {
                            "type": "string",
                            "required": true
                        }
                    },
                    {
                        "instance": "alarm",
                        "field": "triggerPredicate.op",
                        "error": "required",
                        "schema": {
                            "type": "string",
                            "required": true
                        }
                    },
                    {
                        "instance": "alarm",
                        "field": "triggerPredicate.val",
                        "error": "required",
                        "schema": {
                            "type": "number",
                            "required": true
                        }
                    }
                ]
            }
            

## Alarms [/alarms]

+ Model (application/json)

    + Body

            {
              "alarms": {
                "result": [
                  {
                      "id": 100,
                      "name": "Metric Threshold Alarm 1",
                      "metric": "MEMU",
                      "plugin": null,
                      "triggerInterval": 60000,
                      "typeId": 3,
                      "typeName": "Threshold",
                      "familyId": 1,
                      "familyName": "Threshold",
                      "triggerPredicate": {
                          "agg": "avg",
                          "op": "gt",
                          "val": 9
                      },
                      "isDeleted": false,
                      "isDisabled": false,
                      "perHostNotify": true,
                      "note": "",
                      "actions": [],
                      "hosts": [],
                      "hostGroupId": 9,
                      "projectId": 11,
                      "accountId": 13,
                      "timeoutInterval": 14400000
                  }
                  
                ]
              }
            }


### List All Alarms [GET]
List All Alarms

+ Response 200

  [Alarms][]
