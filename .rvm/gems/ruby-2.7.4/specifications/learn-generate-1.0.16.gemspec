# -*- encoding: utf-8 -*-
# stub: learn-generate 1.0.16 ruby lib bin

Gem::Specification.new do |s|
  s.name = "learn-generate".freeze
  s.version = "1.0.16"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze, "bin".freeze]
  s.authors = ["Flatiron School".freeze]
  s.date = "2015-12-03"
  s.description = "Generates labs for Learn.co based on a set of lab templates".freeze
  s.email = ["learn@flatironschool.com".freeze]
  s.executables = ["learn-generate".freeze]
  s.files = ["bin/learn-generate".freeze]
  s.homepage = "https://github.com/learn-co/learn-generate".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.6".freeze
  s.summary = "A lab generator".freeze

  s.installed_by_version = "3.1.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.6"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.6"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
  end
end
