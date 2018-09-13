<template>
  <div class="note-wrap">

  <div class="note from-them">
      {{note.note}}
  </div>
    <div class="date">
      <span>
      {{ note.date.toDate() | moment("lll") }}  
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "note",
  props: {
    note: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.note-wrap {
  display: flex;
  flex-shrink: 0;
}

.note { 
    margin: 0 12px 12px 12px;
}

.from-me {
	position:relative;
	padding:10px 20px;
	color:white; 
	background:#0B93F6;
	border-radius:25px;
	float: right;
		
	&:before {
		content:"";
		position:absolute;
		z-index:-1;
		bottom:-2px;
		right:-7px;
		height:20px;
		border-right:20px solid #0B93F6;
		border-bottom-left-radius: 16px 14px;
		-webkit-transform:translate(0, -2px);
	}

	&:after {
		content:"";
		position:absolute;
		z-index:1;
		bottom:-2px;
		right:-56px;
		width:26px;
		height:20px;
		background:white;
		border-bottom-left-radius: 10px;
		-webkit-transform:translate(-30px, -2px);
	}
}
.from-them {
	position:relative;
	padding:10px 20px;
	background:#E5E5EA;
	border-radius:25px;
	color: black;
  float: left;
		
	&:before {
		content:"";
		position:absolute;
		z-index:2;
		bottom:-2px;
		left:-7px;
		height:20px;
		border-left:20px solid #E5E5EA;
		border-bottom-right-radius: 16px 14px;
		-webkit-transform:translate(0, -2px);
	}

	&:after {
		content:"";
		position:absolute;
		z-index:3;
		bottom:-2px;
		left:4px;
		width:26px;
		height:20px;
		background:white;
		border-bottom-right-radius: 10px;
		-webkit-transform:translate(-30px, -2px);
	}
}

.date {
  display: flex;
  align-items: flex-start;
  span {
    font-size: 11px;
    color: rgba(#000, .65);
  }
}


</style>
