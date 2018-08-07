const myMixin = {
    created(){
        console.log("This is a message from a mixins")
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