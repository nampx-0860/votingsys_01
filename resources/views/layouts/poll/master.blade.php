<!DOCTYPE html>
<html lang="vi">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="/templates/votingsys/img/title.png">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="colorlib">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta charset="UTF-8">
    <title>@yield('title')</title>
    {{ Html::style(asset('https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet')) }}
    {{ Html::style(asset('/templates/votingsys/css/linearicons.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/font-awesome.min.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/bootstrap.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/magnific-popup.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/nice-select.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/animate.min.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/jquery-ui.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/owl.carousel.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/main.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/mystyle.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/progressForm.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/bootstrap-datetimepicker.min.css')) }}
    {{ Html::style(asset('/templates/votingsys/css/bootstrap-datetimepicker-standalone.css')) }}
    {{ Html::style(asset('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')) }}
    {{ Html::script(asset('/templates/votingsys/js/jquery.min.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/moment.min.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/bootstrap-datetimepicker.min.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/bootstrap.min.js')) }}
    {{ Html::style(asset('/templates/votingsys/css/tagify.css')) }}
    {{ Html::script(asset('/templates/votingsys/js/tagify.js')) }}
    {{ Html::style(asset('/templates/votingsys/css/bootstrap-toggle.min.css')) }}
    {{ Html::script(asset('/templates/votingsys/js/bootstrap-toggle.min.js')) }}
    <script type="text/javascript">
        window.Laravel = {!! json_encode([
            'baseUrl' => url('/'),
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    {{ Html::style(asset('/templates/votingsys/css/tab-voting.css')) }}
</head>
<body>
    @include('layouts.poll.header')
        @yield('content')
    @include('layouts.poll.footer')
</body>
    {{ Html::script(asset('https://maps.googleapis.com/maps/api/js?key=YOUR-KEY&libraries=places&callback=initAutocomplete')) }}
    {{ Html::script(asset('/templates/votingsys/js/superfish.min.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/jquery.magnific-popup.min.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/jquery-ui.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/owl.carousel.min.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/main.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/progressForm.js')) }}
    {{ Html::script(asset('/templates/votingsys/js/scrollpage.js')) }}
    {{ Html::style(asset('/templates/votingsys/css/prism.min.css')) }}
    {{ Html::script(asset('/templates/votingsys/js/prism.min.js')) }}
    <script src="{{asset('/templates/votingsys/js/myScript.js')}}" ></script>
    <script src="{{asset('/templates/votingsys/js/taginput.js')}}" ></script>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</html>
