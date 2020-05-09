<script>
  export let params;
  export let error = {
    status: 404,
    statusText: "Not Found",
    url: params.wild
  };

  console.log(params);
</script>

<h1>{`Error ${error.status}`}</h1>
<p>{error.statusText}</p>
<p>{error.url}</p>
