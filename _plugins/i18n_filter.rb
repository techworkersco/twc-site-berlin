# Graciously borrowed from:
# https://github.com/nicoespeon/nicoespeon.github.io/blob/develop/_plugins/i18n_filter.rb
# -- and fixed for 2.3 by using --
# https://github.com/gacha/gacha.id.lv/blob/master/_plugins/i18n_filter.rb
# modified again for dynamic locale passing by @abenrob

require 'i18n'

I18n.enforce_available_locales = false

# add new locale keys from https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale
module Jekyll
  module I18nFilter
    def localize(input, locale, format=nil)
      if input.is_a? String
        date_format = Date.parse(input)
      else
        date_format = input
      end
      load_translations(locale)
      format = (format =~ /^:(\w+)/) ? $1.to_sym : format
      I18n.with_locale(locale) { I18n.l date_format, :format => format }
    rescue
      "error"
    end

    def load_translations(loc)
      if I18n.backend.send(:translations).empty?
        I18n.backend.load_translations Dir[File.join(File.dirname(__FILE__),'../_i18n/*.{rb,yml}')]
      end
      I18n.locale = loc
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18nFilter)
