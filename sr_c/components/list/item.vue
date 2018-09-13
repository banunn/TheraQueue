<template>
    <div class="request box">
        <div class="content">
            <div class="detail">
                <div class="name"><strong>{{name}}</strong></div>
                <div class="name">{{request.student.location.campus.name}}</div>
                <div class="date">Scheduled Meeting: {{meetingDate}}</div>
            </div>
            <div class="action">
                <button @click="go" class="button">View</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'request-item',
    props: {
        request: Object
    },
    computed: {
        last() {
            return this.request.student.lastName.charAt(0);
        },
        name() {
            return this.last ? this.request.student.firstName + ' ' + this.last + '.' : ""
        },
        meetingDate() {
            let dates = this.request.student.dates;
            const vm = this;
            let date = _.find(dates, function(i) {
                return i.type == "Scheduled Meeting";
            });
            return date ? this.$moment(date.date).format("LL") : null;
        }
    },
    methods: {
        go() {
            const vm = this;
            this.$router.push({name: 'RequestItem', params: {id: vm.request.id}});
        }
    }
}
</script>

<style lang="scss" scoped>
    .request {
        font-size: .85rem;
    }

    .content {
        display: flex;
        .detail {
            flex:1;
        }
    }
</style>
