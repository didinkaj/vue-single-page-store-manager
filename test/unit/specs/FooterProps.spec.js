import Vue from 'vue';

import Footer from 'src/components/layouts/Footer.vue';

describe('Footer.vue', () => {

    it('should update when dataText is changed.', done => {
        const Constructor = Vue.extend(Footer);

        const comp = new Constructor().$mount();

        comp.footerTitle = 'New Text';

        Vue.nextTick(() => {
            expect(comp.$el.textContent)
                .to.equal('New Text');

            done();
        });
    });
});