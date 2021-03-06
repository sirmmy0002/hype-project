# -*- encoding: utf-8 -*-
# stub: learn-open 1.2.28 ruby lib bin

Gem::Specification.new do |s|
  s.name = "learn-open".freeze
  s.version = "1.2.28"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze, "bin".freeze]
  s.authors = ["Flatiron School".freeze]
  s.date = "2019-01-23"
  s.email = ["learn@flatironschool.com".freeze]
  s.executables = ["learn-open".freeze]
  s.files = ["bin/learn-open".freeze]
  s.homepage = "https://github.com/learn-co/learn-open".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.6".freeze
  s.summary = "Open Learn lessons locally".freeze

  s.installed_by_version = "3.1.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_development_dependency(%q<fakefs>.freeze, ["~> 0.14.2"])
    s.add_development_dependency(%q<pry>.freeze, ["~> 0.11.1"])
    s.add_development_dependency(%q<rspec-core>.freeze, ["~> 3.7.1"])
    s.add_development_dependency(%q<rspec-mocks>.freeze, ["~> 3.7.0"])
    s.add_development_dependency(%q<diff-lcs>.freeze, ["~> 1.3"])
    s.add_development_dependency(%q<guard-rspec>.freeze, ["~> 4.7.0"])
    s.add_runtime_dependency(%q<netrc>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<git>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<learn-web>.freeze, [">= 1.5.2"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.7"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<fakefs>.freeze, ["~> 0.14.2"])
    s.add_dependency(%q<pry>.freeze, ["~> 0.11.1"])
    s.add_dependency(%q<rspec-core>.freeze, ["~> 3.7.1"])
    s.add_dependency(%q<rspec-mocks>.freeze, ["~> 3.7.0"])
    s.add_dependency(%q<diff-lcs>.freeze, ["~> 1.3"])
    s.add_dependency(%q<guard-rspec>.freeze, ["~> 4.7.0"])
    s.add_dependency(%q<netrc>.freeze, [">= 0"])
    s.add_dependency(%q<git>.freeze, [">= 0"])
    s.add_dependency(%q<learn-web>.freeze, [">= 1.5.2"])
  end
end
