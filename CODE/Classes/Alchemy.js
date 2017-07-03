<link rel="stylesheet" href="http://cdn.graphalchemist.com/alchemy.min.css">
...
<script type="text/javascript" src="http://cdn.graphalchemist.com/alchemy.min.js">

<div id="alchemy" class="alchemy"></div>

var some_data =
    {
      "nodes": [
        {
          "id": 1
        },
        {
          "id": 2
        },
        {
          "id": 3
        }
      ],
      "edges": [
        {
          "source": 1,
          "target": 2
        },
        {
          "source": 1,
          "target": 3,
        }
      ]
    };

<script>
  alchemy.begin({"dataSource": some_data})
</script>
