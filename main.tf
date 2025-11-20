provider "google" {
  project     = "flash-spot-478811-m2"
  region      = "us-central1"
  zone        = "us-central1-b"
}


resource "google_storage_bucket" "vankams_3214" {
  name = "vankams3214"
  location = "us-central1"
}

