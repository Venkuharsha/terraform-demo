provider "google" {
  project     = "flash-spot-478811-m2"
  region      = "us-central1"
  zone        = "us-central1-b"
}


resource "google_storage_bucket" "my_bucket" {
  name = "my-bucket"
  location = "us-central1"
}

