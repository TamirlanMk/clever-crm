document.addEventListener('DOMContentLoaded', () => {

    let menuBurger = document.querySelector('.menu__burger');
    let menu = document.querySelector('.header__nav')

    menuBurger.onclick = (e) => {
        e.preventDefault();

        menuBurger.classList.toggle('menu__burger--active')
        menu.classList.toggle('nav--active')
    }

    let tabsWrapper = document.querySelector('.tabs');
    let tabLinks = document.querySelectorAll('.tabs__link');
    let tabBodies = document.querySelectorAll('.tabs__body');

    let tabsClasses = [
        'green',
        'orange',
        'blue'
    ];

    let removeClass = (list, className) => {
        list.forEach(item => {
            item.classList.remove(className);
        })
    }

    let removeClassesTabs = (tabsWrapper, classNames) => {
        classNames.forEach(className => {
            tabsWrapper.classList.remove(`tabs--${className}`)
        });
    }

    tabLinks.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            let activeClass = 'tabs__link--active';
            let activeClassBody = 'tabs__body--active';
            let className = link.getAttribute('data-tabs-class')
            let tab = document.querySelector(link.getAttribute('href'));

            removeClass(tabLinks, activeClass)
            removeClass(tabBodies, activeClassBody)
            removeClassesTabs(tabsWrapper, tabsClasses)


            if (className) {
                tabsWrapper.classList.add(`tabs--${className}`)
            }

            link.classList.add(activeClass)
            tab.classList.add(activeClassBody)


        }
    })
})