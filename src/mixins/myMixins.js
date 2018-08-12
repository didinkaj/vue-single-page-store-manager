const myMixin = {
    created(){

    },
    methods:{
        success:function(msg) {
            this.$notify({
                title: 'Success',
                message: msg,
                type: 'success'
            });
        },
        error:function() {
            this.$notify.error({
                title: 'Error',
                message: msg
            });
        }
    }
}
export default myMixin