import * as ghpages from 'gh-pages'
import moment from 'moment'

ghpages.publish('out', {
	branch: 'main',
	dotfiles: true,
	message: `🚀 Deploy [${moment().format('DD/MM/YY')}]`,
})
