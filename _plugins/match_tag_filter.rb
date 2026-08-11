module Jekyll
  module MatchTagFilter
    def filter_tags(posts, tags)
      tags = Array(tags)

      return posts if tags.empty?
      posts.select{ |p| !(p.data['tags'] & tags).empty? }
    end
  end
end

Liquid::Template.register_filter(Jekyll::MatchTagFilter)
