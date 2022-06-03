# -*- encoding: utf-8 -*-
# stub: learn-web 1.5.5 ruby lib

Gem::Specification.new do |s|
  s.name = "learn-web".freeze
  s.version = "1.5.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Flatiron School".freeze]
  s.date = "2020-08-14"
  s.email = ["learn@flatironschool.com".freeze]
  s.homepage = "https://learn.co".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.6".freeze
  s.summary = "An interface to Learn.co".freeze

  s.installed_by_version = "3.1.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_development_dependency(%q<pry>.freeze, ["~> 0.11.3"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 3.8.0"])
    s.add_development_dependency(%q<guard-rspec>.freeze, ["~> 4.7.0"])
    s.add_runtime_dependency(%q<faraday>.freeze, ["~> 1.0"])
    s.add_runtime_dependency(%q<oj>.freeze, ["~> 3.10"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<pry>.freeze, ["~> 0.11.3"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.8.0"])
    s.add_dependency(%q<guard-rspec>.freeze, ["~> 4.7.0"])
    s.add_dependency(%q<faraday>.freeze, ["~> 1.0"])
    s.add_dependency(%q<oj>.freeze, ["~> 3.10"])
  end
end
