<?php
if (array_key_exists("rssUrl", $_REQUEST)){
	header("content-type: application/xml");
	$xml = file_get_contents($_REQUEST["rssUrl"]); 
	print($xml);
}
?>