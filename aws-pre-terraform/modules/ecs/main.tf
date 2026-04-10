resource "aws_service_discovery_private_dns_namespace" "ecs_namespace" {
  name = "${var.project_name}.local"
  vpc  = var.vpc_id

  tags = {
    Name        = "${var.project_name}-ecs-namespace"
    Environment = var.project_name
  }
}

resource "aws_ecs_cluster" "ecs_cluster" {
  name = var.cluster_name

  tags = {
    Name        = "${var.project_name}-ecs-cluster"
    Environment = var.project_name
  }
}

resource "aws_ecs_cluster_capacity_providers" "ecs_cluster_capacity_providers" {
  cluster_name       = aws_ecs_cluster.ecs_cluster.name
  capacity_providers = ["FARGATE", "FARGATE_SPOT"]

  default_capacity_provider_strategy {
    capacity_provider = "FARGATE"
    weight            = 1
  }
}
