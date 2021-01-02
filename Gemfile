source "https://rubygems.org"
ruby RUBY_VERSION
git_source(:github) { |name| "https://github.com/#{name}.git" }

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "4.2.0"
gem "i18n"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
   gem 'jekyll-multiple-languages-plugin', github: 'kurtsson/jekyll-multiple-languages-plugin', ref: 'refs/pull/178/head'
   gem "jekyll-seo-tag"
   gem "jekyll-feed", "~> 0.11"
   gem "jekyll-sitemap"
end

group :development do
  gem 'html-proofer'
  gem 'rake'
  gem 'pry'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
