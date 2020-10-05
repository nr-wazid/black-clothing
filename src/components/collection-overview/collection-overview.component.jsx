import React from 'react'
import './collection-overview.styles.scss'


import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'


 const CollectionsOverview = ({ collections }) => (
     <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
     </div>
 )

 const mapSatateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapSatateToProps)(CollectionsOverview)