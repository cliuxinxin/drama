<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Drama</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
    <div id="app"></div>
	
	<script>
    	var baseurl = <?php echo "'".url("/")."'" ?>;
    </script>
    <script src="{{ asset('js/bundle.js') }}"></script>
</body>
</html>
