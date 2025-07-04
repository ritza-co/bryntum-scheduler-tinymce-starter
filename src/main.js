import { Scheduler } from '@bryntum/scheduler';
import '../lib/TinyMceField.js';

const scheduler = new Scheduler({
    appendTo : 'container',

    startDate : '2025-01-01',
    endDate   : '2025-01-15',

    viewPreset : 'dayAndWeek',

    columns : [
        {
            text  : 'Name',
            field : 'name',
            width : 150
        },
        {
            text  : 'Type',
            field : 'type',
            width : 120
        },
        {
            text               : 'Description',
            field              : 'description',
            width              : 300,
            type               : 'template',
            template           : ({ value }) => value || '',
            autoHeight         : true,
            revertOnEscape     : false,
            managedCellEditing : false,
            cellEditor         : {
                matchSize : {
                    height : false
                }
            },
            editor : {
                type   : 'tinymcefield',
                inline : false,
                height : 400
            }
        },
        {
            text  : 'Capacity',
            field : 'capacity',
            width : 80,
            align : 'center'
        }
    ],

    resourceStore : {
        readUrl  : 'resources.json',
        autoLoad : true
    },

    eventStore : {
        readUrl  : 'events.json',
        autoLoad : true
    },

    features : {
        eventTooltip : {
            template : ({ eventRecord }) => `
                <div class="event-tooltip">
                    <h4>${eventRecord.name}</h4>
                    <p><strong>Resource:</strong> ${eventRecord.resource.name}</p>
                    <p><strong>Time:</strong> ${eventRecord.startDate.toLocaleString()} - ${eventRecord.endDate.toLocaleString()}</p>
                    ${eventRecord.description ? `<div class="event-description">${eventRecord.description}</div>` : ''}
                </div>
            `
        }
    }
});