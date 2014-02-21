
/*
 * GET home page.
 */
exports.view = function(req, res){
 
  res.render('index', {
    'projects': [
      { 'name': 'Archit Khosla',
        'image': 'lorempixel.people.1.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
		'id': 'project1'
		
      },
      { 'name': 'Needfinding',
        'image': 'lorempixel.city.1.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project2'
      },
      { 'name': 'Prototyping',
        'image': 'lorempixel.technics.1.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project3'
      },
      { 'name': 'Heuristic Evaluation',
        'image': 'lorempixel.abstract.1.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project4'
      },
      { 'name': 'Visualization',
        'image': 'lorempixel.abstract.8.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project5'
      },
      { 'name': 'Social design',
        'image': 'lorempixel.people.2.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project6'
      },
      { 'name': 'Gestural interaction',
        'image': 'lorempixel.technics.2.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project7'
      },
      { 'name': 'Design tools',
        'image': 'lorempixel.city.2.jpeg',
		'profile': 'lorempixel.people.1.jpeg',
        'recipe': [ { 'item': 'Fries',
					'restraunt': 'Santorini' },
						{ 'item': 'Pizza',
					'restraunt': 'Pizza Hut' } ],
        'id': 'project8'
      }
    ]
  });
};