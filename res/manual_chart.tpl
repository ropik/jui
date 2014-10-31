<script id="tpl_chart" type="text/template">
    <section id="api_opt">
    	<h2><!= key !></h2>
    	<p>
    		<table id="opt" width="100%" class="table_s" cellpadding="0" cellspacing="0">
                <tr>
                    <td width="120px">Name</td>
                    <td width="100px">Default</td>
                    <td>Description</td>
                </tr>
                <! for(var key in items) { !>
                <tr>
                    <td><!= items[key].name !></td>
                    <td><!= (items[key] && typeof(items[key].def) != undefined) ? items[key].def : "" !></td>
                    <td><!= (items[key] && typeof(items[key].detail) == "string") ? items[key].detail : "" !></td>
                </tr>
                <! } !>
    		</table>
    	</p>
    </section>
</script>