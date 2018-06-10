// jquery

$('title').text($('blog').attr('judul') + ' - Zen')
$(function(){
	$('.marked').html(marked($('.marked').html()))
	$('.komentar').each(function(){
		$(this).html(marked($(this).html()))
	})
	$('table').addClass('table')
	$('img').addClass('thumbnail')
	$('.konten img').wrap('<a href="#!" class="pop">')
	$('.panel-komentar:first').css({
		'margin-top': '30px'
	})
	$('.pop').on('click', function() {
        $('.image-preview').attr('src', $(this).find('img').attr('src'))
        $('.modal').modal('show')
    })
	hljs.initHighlightingOnLoad()
	$('.stick').theiaStickySidebar({
		additionalMarginTop: 20,
		additionalMarginBottom: 20
	})
})

// vue

Vue.component('komentar', {
	props: ['tanggal'],
	template: `
	<div class="panel panel-default panel-komentar">
		<div class="panel-body komentar"><slot></slot></div>
		<div class="panel-footer">&mdash; {{ tanggal }}</div>
	</div>`
})

Vue.component('blog', {
	props: ['judul'],
	template: `
	<div class="container-fluid">
		<img src='media/1398951_656136371098312_1692318231_o.jpg' class='thumbnail'>
		<div class="row">
			<div class="col-sm-3 stick">
				<span v-for='x in letak_gambar'>
					<a href='#!' class="pop">
						<img :src='x' class='thumbnail'>
					</a>
				</span>
			</div>
			<div class="col-sm-6 stick">
				<h1 style="margin-top: 10;">{{ judul }}</h1>
				<hr>
				<div class='marked konten'>
					<slot></slot>
				</div>
			</div>
			<div class="col-sm-3 stick">
				<p><strong>Tools</strong></p>
				<ul>
					<li>
						<a href='tools/keyboard arabic/index.html' target='_blank'>Keyboard Arabic</a>
					</li>
				</ul>
				<hr>
				<p><strong>Catatan</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "catatan"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Ceramah</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "ceramah"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p class="penting"><strong>KKN</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "kkn"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Pemrograman</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "pemrograman"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p class="penting"><strong>Proyek</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "proyek"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Psikologi</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "psikologi"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Puisi</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "puisi"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
				<p><strong>Sehari-hari</strong></p>
				<ul>
					<li v-for='x in tulisan_sort' v-if='x.kategori == "sehari-hari"'>
						<a :href='x.link'>{{ x.judul }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="modal fade" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
		    	<div class="modal-content">
		     	 	<!-- <div class="modal-header">
		        		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        	<h4 class="modal-title">Modal title</h4>
			      	</div> -->
			      	<div class="modal-body">
		    	    	<img src="" class="image-preview">
		      		</div>
				    <!-- <div class="modal-footer">
		        		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		        		<button type="button" class="btn btn-primary">Save changes</button>
		      		</div> -->
		    	</div><!-- /.modal-content -->
		  	</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
		<br>
	</div>`,
	computed: {
		letak_gambar(){
			return this.gambar.map(function(x){
				return 'media/' + x
			})
		},
		tulisan_sort(){
			return this.tulisan.reverse()
		}
	},
	data: function(){
		return {
			gambar: [
				'30.png',
				'1901721_10152297242766213_1148911909677960665_n.jpg',
				'28157945_209731859776507_6709089338438713344_n.jpg',
				'20181022_137265580191972_2932522086805012480_n.jpg',
				'19955189_447898608913348_4931821318619267072_n.jpg',
				'19622845_1079280812172175_6543219058676858880_n.jpg',
				'18812517_172468076618694_6459190690705309696_n.jpg',
				'18723444_1034114636723336_6435459664955047936_n.jpg',
				'14052714_1959975760896065_514300756_n.jpg',
				'14099680_877945275668956_750027888_n.jpg',
				'13732136_162124524211876_1665095149_n.jpg',
				'13736104_1049622898420085_2071296731_n.jpg',
				'13129895_1606919616293230_597384960_n.jpg',
				'12965042_381188708888280_1741772932_n.jpg'
			],
			tulisan: [
				{
					'judul': 'Semangat',
					'link': 'semangat.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Blogging Ah...',
					'link': 'blogging%20ah.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Auto Save Sublime Text',
					'link': 'auto%20save%20sublime%20text.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Kalau Ada yang Mengatakan Kalau Aku Ni Nggak Berguna, Itu Benar',
					'link': 'kalau%20ada%20yang%20mengatakan%20kalau%20aku%20ni%20nggak%20berguna%20itu%20benar.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Aku Harus Jadi yang Terbaik',
					'link': 'aku%20harus%20jadi%20yang%20terbaik.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Akupun Bisa Jadi Orang Terhormat',
					'link': 'akupun%20bisa%20jadi%20orang%20terhormat.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Bisanya Eh Nggak Sahur',
					'link': 'bisanya%20eh%20nggak%20sahur.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Cara Menyikapi Kesalahan',
					'link': 'cara%20menyikapi%20kesalahan.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Seperti Pedang yang Diasah',
					'link': 'seperti%20pedang%20yang%20diasah.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Catatan PHP dan MySQL',
					'link': 'catatan%20php%20dan%20mysql.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Menampilkan Cuplikan Film dengan VLC',
					'link': 'menampilkan%20cuplikan%20film%20di%20vlc.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Download dan Upload Git Secara Otomatis',
					'link': 'download%20upload%20dengan%20git.html',
					'kategori': 'pemrograman'
				},
				{
					'judul': 'Edit Blog - Tambahan Fitur',
					'link': 'edit%20blog.html',
					'kategori': 'catatan'
				},
				{
					'judul': 'Akulah Cahaya',
					'link': 'akulah%20cahaya.html',
					'kategori': 'puisi'
				},
				{
					'judul': 'Ceramah Bukber Tempatnya Pak Ngalal',
					'link': 'ceramah%20bukber%20tempatnya%20pak%20ngalal.html',
					'kategori': 'ceramah'
				},
				{
					'judul': 'Obat Buat Hati yang Jenuh',
					'link': 'obat%20titik%20jenuh.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Metode Pembelajaran di TK',
					'link': 'metode%20pembelajaran%20di%20tk.html',
					'kategori': 'psikologi'
				},
				{
					'judul': 'Mengerjakan Tugas Seperti Bermain Game',
					'link': 'mengerjakan%20tugas%20seperti%20bermain%20game.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Proker KKN',
					'link': 'proker%20kkn.html',
					'kategori': 'kkn'
				},
				{
					'judul': 'Web Psikologi',
					'link': 'baikin%20web%20psikologi.html',
					'kategori': 'proyek'
				},
				{
					'judul': 'Arsip',
					'link': 'arsip.html',
					'kategori': 'proyek'
				},
				{
					'judul': 'Antrian',
					'link': 'antrian.html',
					'kategori': 'proyek'
				},
				{
					'judul': 'Seven Different',
					'link': 'seven%20different.html',
					'kategori': 'proyek'
				},
				{
					'judul': 'Nyari di Internet',
					'link': 'nyari%20di%20internet.html',
					'kategori': 'catatan'
				},
				{
					'judul': 'Energi Itu Didapat dari Membaca Buku',
					'link': 'energi%20itu%20didapat%20dari%20membaca%20buku.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Apa Kabar Hapalan Quran',
					'link': 'apa%20kabar%20hapalan%20quran.html',
					'kategori': 'sehari-hari'
				},
				{
					'judul': 'Punya Pute',
					'link': 'punya%20pute.html',
					'kategori': 'kkn'
				}
			]
		}
	}
})

app = new Vue({
	el: '.vue'
})