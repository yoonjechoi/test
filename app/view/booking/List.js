/*
 * File: app/view/run/List.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SoCool.view.booking.List', {
    extend: 'Ext.List',
    xtype: 'bookingList',
    id: 'viewBookingList',
    
    
    requires: [
    	'SoCool.view.booking.FilterBar'
    ],

    config: {
        emptyText: 'Add some Bookings, then invite your friends!',
        store: 'Bookings',
        items: [
	    	{ xtype: 'bookingFilterBar' , docked:'top'}
	    	//{ xtype: 'movieSearchBar' , docked:'top' , hidden:true},  
    	],
//        disableSelection: true,
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div>',
            '  <img src="https://graph.facebook.com/{rottonId}/picture?type=square" />',
            '  <div><b>{title}</b> : {subTitle} by {host} with {nMembers}</div>',
            '  <div><b>{schedule}</b> : {location} ; {description}</div>',
            '</div>'    
        )
    }

});