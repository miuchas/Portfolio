!!!
%html
  %head
    %meta{:charset => "utf-8"}
    %meta{:content => "IE=edge", "http-equiv" => "X-UA-Compatible"}
    %meta{:content => "width=device-width, initial-scale=1", :name => "viewport"}

    %link{href: "https://fonts.googleapis.com/css?family=Lato:100", rel: "stylesheet"}
    %link{href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,600,700", rel: "stylesheet", type: "text/css"}

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
