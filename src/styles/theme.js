export const theme = {
    colors: {
        winterhatRed: '#e33824',
        lightseaBlue: '#99bdd3',
        darknightBlue: '#005198',
        southernsunYellow: '#f4bd17',
        darkestnightBlue: '#313a7f',
        darkerhatRed: '#fc3607'
    },
    logo: {
        sizes: {
            xs: 3.2,
            s: 3.4,
            m: 3.6,
            l: 3.8,
            xl: 4.4,
            xxl: 5
        }
    },
    menu: {
        sizes: {
            xs: 3,
            s: 3.2,
            m: 3.4,
            l: 3.6,
            xl: 3.8,
            xxl: 4
        }
    },
    fonts: {
        sans: "'Overpass', sans-serif",
        serif: "'Shippori Mincho', serif",
        italiana: "'Italiana', serif",
        sizes: {
            h1: {
                xs: 3,
                s: 3.2,
                m: 3.4,
                l: 3.6,
                xl: 3.8,
                xxl: 4
            },
            h2: {
                xs: 2,
                s: 2.2,
                m: 2.4,
                l: 2.6,
                xl: 2.8,
                xxl: 3
            }
        }
    },
    breakpoints: {
        xs: 410,
        s: 576,
        m: 768,
        l: 992,
        xl: 1200,
        xxl: 1400,
        xxxl: 1600,
    },
    mQuery(key, rules) {
        return rules => `@media (min-width: ${this.breakpoints[key]}px) { ${rules} }`;
    },
    ftSize(el, size) {
        return `${el} {font-size: ${this.fonts.sizes[el][size]}rem;}`;
    },
    logoSize(size) {
        return `width: ${this.logo.sizes[size]}rem;}`;
    }
}
