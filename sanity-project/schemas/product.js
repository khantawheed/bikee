export default{
    name:'product',
    title:'product',
    type:'document',
    fields: [
        {
            name:'name',
            title:'product name',
            type: 'string',
        },
        {
            name:'description',
            title:'product description',
            type: 'string',
        },
        {
            name:'price',
            title:'product price',
            type: 'number',
        },
        {
            name:'price_id',
            title:'Stripe product price ID',
            type: 'string',
        },
        {
            name:'images',
            title:'product image',
            type: 'array',
            of:[{type:'image'}],
        },
        {
            name:'slug',
            title:'product slug',
            type: 'slug',
            options:{source:'name'},
        },
        {
            name:'categories',
            title:'categories',
            type: 'array',
            of:[{type:'reference',to:{type:'category'}}],
        },
    ]
}