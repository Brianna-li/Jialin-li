$(function(){
	$('.menu').click(function(){
		$('.header').addClass('on');	
	});
	
	$('.header .navbox .btn').click(function(){
		$('.header').removeClass('on');
	});
	
	$('.addcart').click(function(){
		$('.showcart').show();
	});
	
	$('.showcart .btn').click(function(){
		$('.showcart').hide();
	})
})


function checkorder(){
	var fm = document.order;
	if (fm.address1.value=='') {
	    fm.address1.focus();
		$('input[name=address1]').addClass('on');
	    return false;
	}else{
		$('input[name=address1]').removeClass('on');
	}
	
	if (fm.city.value=='') {
	    fm.city.focus();
		$('input[name=city]').addClass('on');
	    return false;
	}else{
		$('input[name=city]').removeClass('on');
	}
	
	if (fm.country.value=='') {
	    fm.country.focus();
		$('input[name=country]').addClass('on');
	    return false;
	}else{
		$('input[name=country]').removeClass('on');
	}
	
	if (fm.code.value=='') {
	    fm.code.focus();
		$('input[name=code]').addClass('on');
	    return false;
	}else{
		$('input[name=code]').removeClass('on');
	}
	
	if (fm.phone.value=='') {
	    fm.phone.focus();
		$('input[name=phone]').addClass('on');
	    return false;
	}else{
		$('input[name=phone]').removeClass('on');
	}
	
	return true;
}


function checkpay(){
	var payobj = document.pay;
	
	var card=payobj.card.value;
	if (!/^\+?[1-9][0-9]*$/.test(card) || card=='') {
	    payobj.card.focus();
		$('input[name=card]').addClass('on');
	    return false;
	}else{
		$('input[name=card]').removeClass('on');
	}
	
	if (payobj.riqi.value=='') {
	    payobj.riqi.focus();
		$('input[name=riqi]').addClass('on');
	    return false;
	}else{
		$('input[name=riqi]').removeClass('on');
	}
	
	var cvv=payobj.cvv.value;
	if (!/^\+?[1-9][0-9]*$/.test(cvv) || parseInt(cvv) > 999) {
	    payobj.cvv.focus();
		$('input[name=cvv]').addClass('on');
	    return false;
	}else{
		$('input[name=cvv]').removeClass('on');
	}
	
	alert('success');
	return false;
}