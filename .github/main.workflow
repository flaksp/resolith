workflow "Check code quality" {
  on = "push"
  resolves = ["app/build", "lint/eslint"]
}

workflow "Deploy" {
  on = "push"
  resolves = ["gh-pages/deploy"]
}

action "dependencies/npm" {
  uses = "docker://node:8.16.0-alpine"
  runs = "npm"
  args = ["install"]
}

action "app/build" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/poi", "build"]
  secrets = [
    "GOOGLE_ANALYTICS_ID",
    "YANDEX_METRIKA_ID",
    "GOOGLE_SITE_VERIFICATION_TOKEN",
    "YANDEX_SITE_VERIFICATION_TOKEN",
    "SENTRY_DSN"
  ]
}

action "app/configure-cname" {
  needs = [
    "app/build"  
  ]
  uses = "actions/bin/sh@master"
  args = ["echo $PUBLIC_DOMAIN >> dist/CNAME"]
}

action "lint/eslint" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/eslint", "."]
}

action "actions/filter-branch" {
  needs = [
    "app/build",
    "app/configure-cname"
  ]
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "gh-pages/deploy" {
  needs = [
    "actions/filter-branch"
  ]
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "dist/"
  }
  secrets = ["GH_PAT"]
}
