data "aws_ecs_task_definition" "palindrome" {
  task_definition = "${aws_ecs_task_definition.palindrome.family}"
}

resource "aws_ecs_task_definition" "palindrome" {
    family                = "find palindrome"
    container_definitions = <<DEFINITION
[
  {
    "name": "palindrome",
    "links": [
      "postgres"
    ],
    "image": "ckvineethchandran/palindrome:latest",
    "essential": true,
    "portMappings": [
      {
        "containerPort": 80,
        "hostPort": 8080
      }
    ],
    "memory": 500,
    "cpu": 10
  },
  {

    "name": "postgres",
    "image": "ckvineethchandran/postgres:latest",
    "cpu": 10,
    "memory": 500,
    "essential": true
  }
]
DEFINITION
}