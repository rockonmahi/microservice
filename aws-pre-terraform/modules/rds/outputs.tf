output "rds_endpoint" {
  value = aws_db_instance.mysql.endpoint
}

output "mysql_db_port" {
  value = var.mysql_db_port
}

output "mysql_db_name" {
  value = var.mysql_db_name
}

output "mysql_db_username" {
  value = var.mysql_db_username
}

output "mysql_db_password" {
  value = var.mysql_db_password
}
