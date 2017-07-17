function hi() {
	$('#hello').html('<h1>Hi there, ' + $('#name').val() + '!</h1>');
}

function main() {
  $('#hello-button').click(hi);
}

$(document).ready(main);
