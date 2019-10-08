import React, { Component, Fragment } from 'react'

import AtomsButton from '../atoms/buttons/button'

import MoleculesFilterBar from '../molecules/navigations/filter-bar'
import MoleculesProduct from '../molecules/products/product'
import OrganismsProductListingHalf from '../organisms/listings/product-listing'
import OrganismsBanner from '../organisms/banners/newsletter-banner'
import OrganismsGuide from '../organisms/guides/guide'
import MoleculesBreadcrumb from '../molecules/breadcrumbs/breadcrumb'
import MoleculesSequentialNav from '../molecules/navigations/sequential-nav'

import OrganismsHead from '../organisms/base/header'
import OrganismsFoot from '../organisms/base/foot'

class TemplatesCategoryOverview extends Component {
    render () {
        return (
            <Fragment>
                <OrganismsHead />
                <main role='main'>
                    <div className='o-container o-distance-l o-prevent-space'>
                        <div className='o-stage o-stage--accent'>
                            <MoleculesBreadcrumb />
                            <h2 className='c-title o-distance-s'>Kleider</h2>
                            <p>4521 Produkte</p>
                        </div>
                        <div className='o-guided-content o-distance-l'>
                            <div className='o-guided-content__aside'>
                                <MoleculesSequentialNav />
                            </div>
                            <div className='o-guided-content__body'>
                                <MoleculesFilterBar />
                                <div className='o-distance-l'>
                                    <div className='o-grid o-grid--large-third'>
                                        <MoleculesProduct />
                                        <MoleculesProduct />
                                        <MoleculesProduct />
                                        <MoleculesProduct />
                                        <MoleculesProduct />
                                        <MoleculesProduct />
                                    </div>
                                </div>
                                <div className='o-distance o-center'>
                                    <p className='u-text-light u-text-small'>Du hast 9 von 4521 Produkte angesehen</p>
                                    <button className='c-button o-distance-s'>Mehr Artikel ansehen</button>
                                </div>
                                <div className='o-distance'>
                                    <p>
                                        <strong>Kleider für modebewusste Damen in vielen Varianten</strong>
                                    </p>
                                    <p>
                                        Das eleganteste und zugleich unkomplizierteste Kleidungsstück ist mit Sicherheit
                                        das Kleid. Stilvolle Kleider versüßen Dir luftig leicht nicht nur die schönsten
                                        Sommerabende, sondern umschmeicheln Dich angemessen für einen Ball und sind im
                                        Winter in Kombination mit Strickstrumpfhosen unentbehrlich. Nie ist man
                                        schneller gekonnt angezogen als mit dem Lieblingskleid. Einfach über eine dunkle
                                        Leggings gezogen, mit einer Statement-Kette erweitert und dem taillierten Blazer
                                        abgerundet - fertig ist ein tolles Outfit! Du bist noch auf der Suche nach einem
                                        perfekten Kleid? Egal, ob Strick,- oder Sommerkleid für die kühlere Jahreszeit,
                                        bei ABOUT YOU findest du modische Damenkleidung und stilvolle Varianten, in die
                                        Du Dich sofort verliebst. Wie wäre es zum Beispiel mit einem Off-Shoulder
                                        Modell, mit dem Du Deine Schulterpartie in Szene setzt? Wird es das lässige
                                        Jeanskleid für die Freizeit oder doch eins der festlichen Kleider für die
                                        nächste Hochzeit?
                                    </p>
                                    <p className='o-distance'>
                                        <strong>Kleider für modebewusste Damen in vielen Varianten</strong>
                                    </p>
                                    <p>
                                        Das eleganteste und zugleich unkomplizierteste Kleidungsstück ist mit Sicherheit
                                        das Kleid. Stilvolle Kleider versüßen Dir luftig leicht nicht nur die schönsten
                                        Sommerabende, sondern umschmeicheln Dich angemessen für einen Ball und sind im
                                        Winter in Kombination mit Strickstrumpfhosen unentbehrlich. Nie ist man
                                        schneller gekonnt angezogen als mit dem Lieblingskleid. Einfach über eine dunkle
                                        Leggings gezogen, mit einer Statement-Kette erweitert und dem taillierten Blazer
                                        abgerundet - fertig ist ein tolles Outfit! Du bist noch auf der Suche nach einem
                                        perfekten Kleid? Egal, ob Strick,- oder Sommerkleid für die kühlere Jahreszeit,
                                        bei ABOUT YOU findest du modische Damenkleidung und stilvolle Varianten, in die
                                        Du Dich sofort verliebst. Wie wäre es zum Beispiel mit einem Off-Shoulder
                                        Modell, mit dem Du Deine Schulterpartie in Szene setzt? Wird es das lässige
                                        Jeanskleid für die Freizeit oder doch eins der festlichen Kleider für die
                                        nächste Hochzeit?
                                    </p>
                                    <p className='o-distance'>
                                        <strong>Kleider für modebewusste Damen in vielen Varianten</strong>
                                    </p>
                                    <p>
                                        Das eleganteste und zugleich unkomplizierteste Kleidungsstück ist mit Sicherheit
                                        das Kleid. Stilvolle Kleider versüßen Dir luftig leicht nicht nur die schönsten
                                        Sommerabende, sondern umschmeicheln Dich angemessen für einen Ball und sind im
                                        Winter in Kombination mit Strickstrumpfhosen unentbehrlich. Nie ist man
                                        schneller gekonnt angezogen als mit dem Lieblingskleid. Einfach über eine dunkle
                                        Leggings gezogen, mit einer Statement-Kette erweitert und dem taillierten Blazer
                                        abgerundet - fertig ist ein tolles Outfit! Du bist noch auf der Suche nach einem
                                        perfekten Kleid? Egal, ob Strick,- oder Sommerkleid für die kühlere Jahreszeit,
                                        bei ABOUT YOU findest du modische Damenkleidung und stilvolle Varianten, in die
                                        Du Dich sofort verliebst. Wie wäre es zum Beispiel mit einem Off-Shoulder
                                        Modell, mit dem Du Deine Schulterpartie in Szene setzt? Wird es das lässige
                                        Jeanskleid für die Freizeit oder doch eins der festlichen Kleider für die
                                        nächste Hochzeit?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='o-distance'>
                            <OrganismsBanner />
                        </div>
                    </div>
                </main>
                <OrganismsGuide />
                <OrganismsFoot />
            </Fragment>
        )
    }
}

TemplatesCategoryOverview.propTypes = {}

TemplatesCategoryOverview.defaultProps = {}

export default TemplatesCategoryOverview
