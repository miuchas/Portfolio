!!!
%html
  %head
    %meta{:charset => "utf-8"}
    %meta{:content => "IE=edge", "http-equiv" => "X-UA-Compatible"}
    %meta{:content => "width=device-width, initial-scale=1", :name => "viewport"}
    %title Phelipe E. S. Diniz
    -# FavIcon
    -# %link{:href => "/favicon.ico", :rel => "icon", :type => "image/x-icon"}

    -# CSS
    %link{:href => "/css/app.css", :rel => "stylesheet", :type => "text/css"}

  %body
    .container
      @include('banner')
      -# @include('identificacao')
      @include('timeline')


  %script{:src => "/js/app.js", :type => "text/javascript"}
