	//Script para los desplegables con dependencia
		function habilitar(form) {
		//ARRAYS
		var mAcura = [{ text: 'CL', value: 'CL'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mAlfaRomeo = [{ text: '145', value: '145'}, { text: '146', value: '146'}, { text: '147', value: '147'}, { text: '156', value: '156'}, { text: '159', value: '159'}, { text: 'Brera', value: 'Brera'}, { text: 'Giulietta', value: 'Giulietta'}, { text: 'Mito', value: 'Mito'}, { text: 'Spider', value: 'Spider'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mAro = [{ text: '243', value: '243'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mAudi = [{ text: '3', value: '3'}, { text: 'Serie 1', value: 'Serie 1'}, { text: 'Serie 3', value: 'Serie 3'}, { text: 'Serie 3 Sedan', value: 'Serie 3 Sedan'}, { text: 'Serie 4 Coupe', value: 'Serie 4 Coupe'}, { text: 'Serie 4 Grand Coupe', value: 'Serie 4 Grand coupe'}, { text: 'Serie 5', value: 'Serie 5'}, { text: 'Serie 5 Sedan', value: 'Serie 5 Sedan'}, { text: 'Serie 6', value: 'Serie 6'}, { text: 'Serie 6 Grand Coupe', value: 'Serie 6 Grand Coupe'}, { text: 'Serie 7', value: 'Serie 7'}, {text: 'Serie 8', value: 'Serie 8'}, {text: 'Serie M', value: 'Serie M'}, {text: 'X1', value: 'X1'}, {text: 'X3', value: 'X3'}, {text: 'X5', value: 'X5'}, {text: 'X6', value: 'X6'}, {text: 'Z3', value: 'Z3'}, {text: 'Z4', value: 'Z4'}, {text: 'Otro Modelo', value: 'Otro'}];			
		var mBMW = [{ text: '3', value: '3'}, { text: 'Serie 1', value: 'Serie 1'}, { text: 'Serie 3', value: 'Serie 3'},  { text: 'Serie 3 Sedan', value: 'Serie 3 Sedan'}, { text: 'Serie 4 Coupe', value: 'Serie 4 Coupe'}, { text: 'Serie 5', value: 'Serie 5'}, { text: 'Serie 5 Sedan', value: 'Serie 5 Sedan'}, { text: 'Serie 6', value: 'Serie 6'}, { text: 'Serie 6  Grand Coupe', value: 'Serie 6  Grand Coupe'}, { text: 'Serie 7', value: 'Serie 7'}, { text: 'Serie 8', value: 'Serie 8'}, { text: 'Serie M', value: 'Serie M'}, { text: 'X1', value: 'X1'}, { text: 'X3', value: 'X3'}, { text: 'X5', value: 'X5'}, { text: 'X6', value: 'X6'}, { text: 'Z3', value: 'Z3'}, { text: 'Z4', value: 'Z4'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mCadillac = [{ text: 'Deville', value: 'Deville'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mChery = [{ text: 'Face', value: 'Face'}, { text: 'Fulwin', value: 'Fulwin'}, { text: 'QQ', value: 'QQ'}, { text: 'Skin', value: 'Skin'}, { text: 'Tiggo', value: 'Tiggo'}, { text: 'Tiggo 5', value: 'Tiggo 5'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mChevrolet = [{ text: '400', value: '400'}, { text: 'Agile', value: 'Agile'}, { text: 'Astra', value: 'Astra'}, { text: 'Avalanche', value: 'Avalanche'}, { text: 'Aveo', value: 'Aveo'}, { text: 'Blazer', value: 'Blazer'}, { text: 'C 10', value: 'C 10'}, { text: 'C 20', value: 'C 20'}, { text: 'Camaro', value: 'Camaro'}, { text: 'Captiva', value: 'Captiva'}, { text: 'Celta', value: 'Celta'}, { text: 'Chevy', value: 'Chevy'}, { text: 'Classic', value: 'Classic'}, { text: 'Cobalt', value: 'Cobalt'}, { text: 'Combo', value: 'Combo'}, { text: 'Corsa', value: 'Corsa'}, { text: 'Corsa II', value: 'Corsa II'}, { text: 'Corvette', value: 'Corvette'}, { text: 'Cruze', value: 'Cruze'}, { text: 'Grand Vitara', value: 'Grand Vitara'}, { text: 'LUV', value: 'LUV'}, { text: 'Meriva', value: 'Meriva'}, { text: 'Montana', value: 'Montana'}, { text: 'Nuevo Cruze', value: 'Nuevo Cruze'}, { text: 'Nuevo Cruze 5', value: 'Nuevo Cruze 5'}, { text: 'Onix', value: 'Onix'}, { text: 'Onix Joy', value: 'Onix Joy'}, { text: 'Prisma', value: 'Prisma'}, { text: 'Prisma Joy', value: 'Prisma Joy'}, { text: 'S 10', value: 'S 10'}, { text: 'Silverado', value: 'Silverado'}, { text: 'Sonic', value: 'Sonic'}, { text: 'Spark', value: 'Spark'}, { text: 'Spin', value: 'Spin'}, { text: 'Suburban', value: 'Suburban'}, { text: 'Tracker', value: 'Tracker'}, { text: 'Vectra', value: 'Vectra'}, { text: 'Vectra GT', value: 'Vectra GT'}, { text: 'Zafira', value: 'Zafira'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mChrysler = [{ text: '300 M', value: '300 M'}, { text: 'Caravan', value: 'Caravan'}, { text: 'Grand Caravan', value: 'Grand Caravan'}, { text: 'Journey', value: 'Journey'}, { text: 'Neon', value: 'Neon'}, { text: 'PT Cruiser', value: 'PT Cruiser'}, { text: 'Stratus', value: 'Stratus'}, { text: 'Town Country', value: 'Town Country'}, { text: 'Valiant', value: 'Valiant'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mCitroen = [{ text: '3CV', value: '3CV'}, { text: 'Air Cross', value: 'Air Cross'}, { text: 'Berlingo', value: 'Berlingo'}, { text: 'C-15', value: 'C-15'}, { text: 'C-Elysee', value: 'C-Elysee'}, { text: 'C3', value: 'C3'}, { text: 'C3 Aircross', value: 'C3 Aircross'}, { text: 'C3 Picasso', value: 'C3 Picasso'}, { text: 'C4', value: 'C4'}, { text: 'C4 Cactus', value: 'C4 Cactus'}, { text: 'C4 Lounge', value: 'C4 Lounge'}, { text: 'C4 Picasso', value: 'C4 Picasso'}, { text: 'C5', value: 'C5'}, { text: 'DS3', value: 'DS3'}, { text: 'DS4', value: 'DS4'}, { text: 'Grand C4 Picasso', value: 'Grand C4 Picasso'}, { text: 'Jumper', value: 'Jumper'}, { text: 'Mehari', value: 'Mehari'}, { text: 'Nuevo C3', value: 'Nuevo C3'}, { text: 'Xantia', value: 'Xantia'}, { text: 'Xsara', value: 'Xsara'}, { text: 'Xsara Picasso', value: 'Xsara Picasso'}, { text: 'ZX', value: 'ZX'}, { text: 'Otro Modelo', value: 'Otro'}];			
		var mDS = [{ text: '3', value: '3'}, { text: '4', value: '4'}, { text: '4 Crossback', value: '4 Crossback'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mDaewoo = [{ text: 'Damas', value: 'Damas'}, { text: 'Espero', value: 'Espero'}, { text: 'Lanos', value: 'Lanos'}, { text: 'Nubira', value: 'Nubira'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mDaihatsu = [{ text: 'Applause', value: 'Applause'}, { text: 'Terios', value: 'Terios'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mDodge = [{ text: '1500', value: '1500'}, { text: 'Coronado', value: 'Coronado'}, { text: 'D-100', value: 'D-100'}, { text: 'Journey', value: 'Journey'}, { text: 'Ram', value: 'Ram'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mFerrari = [{ text: 'California', value: 'California'}, { text: 'F430', value: 'F430'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mFiat = [{ text: '1100', value: '1100'}, { text: '125', value: '125'}, { text: '128', value: '128'}, { text: '147', value: '147'}, { text: '1500', value: '1500'}, { text: '500', value: '500'}, { text: '500 Abarth', value: '500 Abarth'}, { text: '500 L', value: '500 L'}, { text: '600', value: '600'}, { text: 'Adventure', value: 'Adventure'}, { text: 'Barchetta', value: 'Barchetta'}, { text: 'Bravo', value: 'Bravo'}, { text: 'Doblo', value: 'Doblo'}, { text: 'Ducato', value: 'Ducato'}, { text: 'Duna', value: 'Duna'}, { text: 'Fiorino', value: 'Fiorino'}, { text: 'Fiorino Qubo', value: 'Fiorino Qubo'}, { text: 'Grand Siena', value: 'Grand Siena'}, { text: 'Idea', value: 'Idea'}, { text: 'Linea', value: 'Linea'}, { text: 'Marea', value: 'Marea'}, { text: 'Mobi', value: 'Mobi'}, { text: 'Nuevo Uno', value: 'Nuevo Uno'}, { text: 'Palio', value: 'Palio'}, { text: 'Palio Fire', value: 'Palio Fire'}, { text: 'Punto', value: 'Punto'}, { text: 'Qubo', value: 'Qubo'}, { text: 'Regatta', value: 'Regatta'}, { text: 'Siena', value: 'Siena'}, { text: 'Spazio', value: 'Spazio'}, { text: 'Stilo', value: 'Stilo'}, { text: 'Strada', value: 'Strada'}, { text: 'Tempra', value: 'Tempra'}, { text: 'Tipo', value: 'Tipo'}, { text: 'Toro', value: 'Toro'}, { text: 'Uno', value: 'Uno'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mFord = [{ text: 'A', value: 'A'}, { text: 'Bronco', value: 'Bronco'}, { text: 'Courier', value: 'Courier'}, { text: 'EcoSport', value: 'EcoSport'}, { text: 'Econoline', value: 'Econoline'}, { text: 'Escape', value: 'Escape'}, { text: 'Escort', value: 'Escort'}, { text: 'Explorer', value: 'Explorer'}, { text: 'F-100', value: 'F-100'}, { text: 'F-350', value: 'F-350'}, { text: 'F-400', value: 'F-400'}, { text: 'Falcon', value: 'Falcon'}, { text: 'Fiesta', value: 'Fiesta'}, { text: 'Fiesta Kinetic', value: 'Fiesta Kinetic'}, { text: 'Focus', value: 'Focus'}, { text: 'Ka', value: 'Ka'}, { text: 'Kuga', value: 'Kuga'}, { text: 'Mondeo', value: 'Mondeo'}, { text: 'Mustang', value: 'Mustang'}, { text: 'Nueva EcoSport', value: 'Nueva EcoSport'}, { text: 'Nueva Ranger', value: 'Nueva Ranger'}, { text: 'Nuevo Fiesta', value: 'Nuevo Fiesta'}, { text: 'Nuevo Focus', value: 'Nuevo Focus'}, { text: 'Nuevo KA', value: 'Nuevo KA'}, { text: 'Nuevo Ka+ 4P', value: 'Nuevo Ka+ 4P'}, { text: 'Nuevo Ka+ 5P', value: 'Nuevo Ka+ 5P'}, { text: 'Nuevo Mondeo', value: 'Nuevo Mondeo'}, { text: 'Orion', value: 'Orion'}, { text: 'Ranchero', value: 'Ranchero'}, { text: 'Ranger', value: 'Ranger'}, { text: 'S-MAX', value: 'S-MAX'}, { text: 'Sierra', value: 'Sierra'}, { text: 'Taunus', value: 'Taunus'}, { text: 'Transit', value: 'Transit'}, { text: 'Transit Minibus', value: 'Transit Minibus'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mFordImportados = [{ text: 'Otro Modelo', value: 'Otro'}];
		var mFoton = [{ text: 'Tunland', value: 'Tunland'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mHonda = [{ text: 'Accord', value: 'Accord'}, { text: 'CR-V', value: 'CR-V'}, { text: 'CRX', value: 'CRX'}, { text: 'City', value: 'City'}, { text: 'Civic', value: 'Civic'}, { text: 'Fit', value: 'Fit'}, { text: 'HR-V', value: 'HR-V'}, { text: 'Stream', value: 'Stream'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mHyundai = [{ text: 'Accent', value: 'Accent'}, { text: 'Atos', value: 'Atos'}, { text: 'Creta', value: 'Creta'}, { text: 'Elantra', value: 'Elantra'}, { text: 'Excel', value: 'Excel'}, { text: 'Galloper', value: 'Galloper'}, { text: 'Genesis', value: 'Genesis'}, { text: 'Genesis Coupe', value: 'Genesis Coupe'}, { text: 'Gran Santa Fe', value: 'Gran Santa Fe'}, { text: 'H-1', value: 'H-1'}, { text: 'H-100', value: 'H-100'}, { text: 'HD78', value: 'HD78'}, { text: 'I 10', value: 'I 10'}, { text: 'I-30', value: 'I-30'}, { text: 'Santa Fe', value: 'Santa Fe'}, { text: 'Santamo', value: 'Santamo'}, { text: 'Tucson', value: 'Tucson'}, { text: 'Veracruz', value: 'Veracruz'},{ text: 'Otro Modelo', value: 'Otro'}];
		var mIka = [{ text: 'Estanciera', value: 'Estanciera'}, { text: 'Jeep 4x2', value: 'Jeep 4x2'}, { text: 'Otro Modelo', value: 'Otro'}];		
		var mIsuzu = [{ text: 'Pick up', value: 'Pick up'}, { text: 'Trooper', value: 'Trooper'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mIveco = [{ text: 'Otro Modelo', value: 'Otro'}];
		var mJaguar = [{ text: 'S-Type', value: 'S-Type'}, { text: 'X-Type', value: 'X-Type'}, { text: 'XJ6', value: 'XJ6'}, { text: 'XKR', value: 'XKR'}, { text: 'Otro Modelo', value: 'Otro'}];			
		var mJeep = [{ text: 'Cherokee', value: 'Cherokee'}, { text: 'Compass', value: 'Compass'}, { text: 'Grand Cherokee', value: 'Grand Cherokee'}, { text: 'Patriot', value: 'Patriot'}, { text: 'Renegade', value: 'Renegade'}, { text: 'Wrangler', value: 'Wrangler'}, { text: 'Otro Modelo', value: 'Otro'}];			
		var mKia = [{ text: 'Carnival', value: 'Carnival'}, { text: 'Cerato', value: 'Cerato'}, { text: 'Grand Sportage', value: 'Grand Sportage'}, { text: 'K 2500', value: 'K 2500'}, { text: 'Mohave', value: 'Mohave'}, { text: 'Opirus', value: 'Opirus'}, { text: 'Picanto', value: 'Picanto'}, { text: 'Rio', value: 'Rio'}, { text: 'Sorento', value: 'Sorento'}, { text: 'Soul', value: 'Soul'}, { text: 'Sportage', value: 'Sportage'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mLada = [{ text: 'Laika', value: 'Laika'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mLandRover = [{ text: 'Discovery', value: 'Discovery'}, { text: 'FreeLander', value: 'FreeLander'}, { text: 'Freelander 2', value: 'Freelander 2'}, { text: 'Range Rover', value: 'Range Rover'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mLifan = [{ text: 'Foison Box', value: 'Foison Box'}, { text: 'Foison Cargo', value: 'Foison Cargo'}, { text: 'X50', value: 'X50'}, { text: 'X60', value: 'X60'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mMG = [{ text: 'Otro Modelo', value: 'Otro'}];
		var mMaserati = [{ text: 'Coupe', value: 'Coupe'}, { text: 'Ghibli', value: 'Ghibli'}, { text: 'Quattroporte', value: 'Quattroporte'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mMazda = [{ text: '626', value: '626'}, { text: 'MX-3', value: 'MX-3'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mMercedesBenz = [{ text: '190', value: '190'}, { text: '230', value: '230'}, { text: '250', value: '250'}, { text: '280', value: '280'}, { text: '300', value: '300'}, { text: '500', value: '500'}, { text: 'C220', value: 'C220'}, { text: 'CL', value: 'CL'}, { text: 'CLA', value: 'CLA'}, { text: 'CLK', value: 'CLK'}, { text: 'CLS', value: 'CLS'}, { text: 'Clase A', value: 'Clase A'}, { text: 'Clase B', value: 'Clase B'}, { text: 'Clase C', value: 'Clase C'}, { text: 'Clase CLC', value: 'Clase CLC'}, { text: 'Clase E', value: 'Clase E'}, { text: 'Clase G', value: 'Clase G'}, { text: 'GLA', value: 'GLA'}, { text: 'GLC', value: 'GLC'}, { text: 'GLK', value: 'GLK'}, { text: 'ML', value: 'ML'}, { text: 'Mb 180', value: 'Mb 180'}, { text: 'SL', value: 'SL'}, { text: 'SLK', value: 'SLK'}, { text: 'Sprinter', value: 'Sprinter'}, { text: 'Vito', value: 'Vito'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mMini = [{ text: 'Cooper', value: 'Cooper'}, { text: 'Countryman', value: 'Countryman'}, { text: 'Mini John Cooper Works', value: 'Mini John Cooper Works'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mMitsubishi = [{ text: 'L-200', value: 'L-200'}, { text: 'L-300', value: 'L-300'}, { text: 'Lancer', value: 'Lancer'}, { text: 'Montero', value: 'Montero'}, { text: 'Nativa', value: 'Nativa'}, { text: 'New Outlander Sport', value: 'New Outlander Sport'}, { text: 'Outlander', value: 'Outlander'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mNissan = [{ text: 'Frontier', value: 'Frontier'}, { text: 'Kicks', value: 'Kicks'}, { text: 'March', value: 'March'}, { text: 'Maxima', value: 'Maxima'}, { text: 'Murano', value: 'Murano'}, { text: 'Note', value: 'Note'}, { text: 'Np', value: 'Np'}, { text: 'Sentra', value: 'Sentra'}, { text: 'TIIDA', value: 'TIIDA'}, { text: 'Terrano II', value: 'Terrano II'}, { text: 'Versa', value: 'Versa'}, { text: 'X Terra', value: 'X Terra'}, { text: 'X-Trail', value: 'X-Trail'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mOpel = [{ text: 'Otro Modelo', value: 'Otro'}];
		var mPeugeot = [{ text: '106', value: '106'}, { text: '2008', value: '2008'}, { text: '205', value: '205'}, { text: '206', value: '206'}, { text: '207', value: '207'}, { text: '207 Compact', value: '207 Compact'}, { text: '208', value: '208'}, { text: '3008', value: '3008'}, { text: '301', value: '301'}, { text: '306', value: '306'}, { text: '307', value: '307'}, { text: '308', value: '308'}, { text: '308 Hatchback', value: '308 Hatchback'}, { text: '403', value: '403'}, { text: '404', value: '404'}, { text: '405', value: '405'}, { text: '406', value: '406'}, { text: '407', value: '407'}, { text: '408', value: '408'}, { text: '5008', value: '5008'}, { text: '504', value: '504'}, { text: '505', value: '505'}, { text: '508', value: '508'}, { text: '607', value: '607'}, { text: '806', value: '806'}, { text: '807', value: '807'}, { text: 'Boxer', value: 'Boxer'}, { text: 'Expert', value: 'Expert'}, { text: 'Hoggar', value: 'Hoggar'}, { text: 'Partner', value: 'Partner'}, { text: 'Partner Furgon', value: 'Partner Furgon'}, { text: 'RCZ', value: 'RCZ'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mPorsche = [{ text: '911', value: '911'}, { text: 'Boxster', value: 'Boxster'}, { text: 'Cayenne', value: 'Cayenne'}, { text: 'Cayman', value: 'Cayman'}, { text: 'Panamera', value: 'Panamera'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mRAM = [{ text: '1500', value: '1500'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mRastrojero = [{ text: 'F', value: 'F'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mRenault = [{ text: '11', value: '11'}, { text: '12', value: '12'}, { text: '18', value: '18'}, { text: '19', value: '19'}, { text: '21', value: '21'}, { text: '9', value: '9'}, { text: 'Captur', value: 'Captur'}, { text: 'Clio', value: 'Clio'}, { text: 'Clio Mio', value: 'Clio Mio'}, { text: 'Duster', value: 'Duster'}, { text: 'Duster Dakar', value: 'Duster Dakar'}, { text: 'Duster Oroch<', value: 'Duster Oroch<'}, { text: 'Express', value: 'Express'}, { text: 'Fluence', value: 'Fluence'}, { text: 'Fuego', value: 'Fuego'}, { text: 'Gordini', value: 'Gordini'}, { text: 'Kangoo', value: 'Kangoo'}, { text: 'Kangoo 2', value: 'Kangoo 2'}, { text: 'Kangoo 2 Express', value: 'Kangoo 2 Express'}, { text: 'Koleos', value: 'Koleos'}, { text: 'Laguna', value: 'Laguna'}, { text: 'Latitude', value: 'Latitude'}, { text: 'Logan', value: 'Logan'}, { text: 'Master', value: 'Master'}, { text: 'Megane', value: 'Megane'}, { text: 'Megane III', value: 'Megane III'}, { text: 'Sandero', value: 'Sandero'}, { text: 'Sandero Stepway', value: 'Sandero Stepway'}, { text: 'Scenic', value: 'Scenic'}, { text: 'Symbol', value: 'Symbol'}, { text: 'Torino', value: 'Torino'}, { text: 'Trafic', value: 'Trafic'}, { text: 'Twingo', value: 'Twingo'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mRover = [{ text: 'MG', value: 'MG'}, { text: 'Serie 200', value: 'Serie 200'}, { text: 'Serie 400', value: 'Serie 400'}, { text: 'Serie 800', value: 'Serie 800'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mRugby = [{ text: 'Otro Modelo', value: 'Otro'}];
		var mSaab = [{ text: '9000', value: '9000'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mSeat = [{ text: 'Cordoba', value: 'Cordoba'}, { text: 'Ibiza', value: 'Ibiza'}, { text: 'Inca', value: 'Inca'}, { text: 'Leon', value: 'Leon'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mSmart = [{ text: 'ForFour', value: 'ForFour'}, { text: 'Fortwo Coupe', value: 'Fortwo Coupe'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mSsangyong = [{ text: 'Actyon', value: 'Actyon'}, { text: 'Korando', value: 'Korando'}, { text: 'Musso', value: 'Musso'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mSubaru = [{ text: 'Forester', value: 'Forester'}, { text: 'Impreza', value: 'Impreza'}, { text: 'Legacy', value: 'Legacy'}, { text: 'Outback', value: 'Outback'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mSuzuki = [{ text: 'Fun', value: 'Fun'}, { text: 'Grand Vitara', value: 'Grand Vitara'}, { text: 'Samurai', value: 'Samurai'}, { text: 'Sidekick', value: 'Sidekick'}, { text: 'Swift', value: 'Swift'}, { text: 'Vitara', value: 'Vitara'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mToyota = [{ text: '4 Runner', value: '4 Runner'}, { text: 'Camry', value: 'Camry'}, { text: 'Celica', value: 'Celica'}, { text: 'Corolla', value: 'Corolla'}, { text: 'Corona', value: 'Corona'}, { text: 'Etios', value: 'Etios'}, { text: 'Fielder', value: 'Fielder'}, { text: 'Hiace', value: 'Hiace'}, { text: 'Hilux', value: 'Hilux'}, { text: 'Land Cruiser', value: 'Land Cruiser'}, { text: 'Prado', value: 'Prado'}, { text: 'Prius', value: 'Prius'}, { text: 'RAV-4', value: 'RAV-4'}, { text: 'SW4', value: 'SW4'}, { text: 'Yaris', value: 'Yaris'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mVolkswagen = [{ text: '1500', value: '1500'}, { text: 'Amarok', value: 'Amarok'}, { text: 'Beetle', value: 'Beetle'}, { text: 'Bora', value: 'Bora'}, { text: 'Bora Diesel', value: 'Bora Diesel'}, { text: 'CC', value: 'CC'}, { text: 'Caddy', value: 'Caddy'}, { text: 'CrossFox', value: 'CrossFox'}, { text: 'Escarabajo', value: 'Escarabajo'}, { text: 'Fox', value: 'Fox'}, { text: 'Gacel', value: 'Gacel'}, { text: 'Gol', value: 'Gol'}, { text: 'Gol Trend', value: 'Gol Trend'}, { text: 'Golf', value: 'Golf'}, { text: 'New Beetle', value: 'New Beetle'}, { text: 'Nuevo Gol', value: 'Nuevo Gol'}, { text: 'Passat', value: 'Passat'}, { text: 'Pointer', value: 'Pointer'}, { text: 'Polo', value: 'Polo'}, { text: 'Polo Classic', value: 'Polo Classic'}, { text: 'Santana', value: 'Santana'}, { text: 'Saveiro', value: 'Saveiro'}, { text: 'Scirocco', value: 'Scirocco'}, { text: 'Senda', value: 'Senda'}, { text: 'Sharan', value: 'Sharan'}, { text: 'Suran', value: 'Suran'}, { text: 'Tiguan', value: 'Tiguan'}, { text: 'Touareg', value: 'Touareg'}, { text: 'Transporter', value: 'Transporter'}, { text: 'Up!', value: 'Up'}, { text: 'Vento', value: 'Vento'}, { text: 'Voyage', value: 'Voyage'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mVolvo = [{ text: '850', value: '850'}, { text: '940', value: '940'}, { text: 'C30', value: 'C30'}, { text: 'S40', value: 'S40'}, { text: 'S60', value: 'S60'}, { text: 'S80', value: 'S80'}, { text: 'V50', value: 'V50'}, { text: 'V70', value: 'V70'}, { text: 'XC', value: 'XC'}, { text: 'XC90', value: 'XC90'}, { text: 'Otro Modelo', value: 'Otro'}];
		var mOtraMarca = [{ text: 'Otro Modelo', value: 'Otro'}];
			
		//var mCadillac = [{ text: '', value: ''}, { text: 'Otro Modelo', value: 'Otro'}];
			
		
		//INICIO DE FUNCION
		var valorParticular = document.getElementById('marcaParticular').value;
		//Inicializando T0DO por defecto
		document.getElementById('linea').style.display="none";
		document.getElementById('interno').style.display="none"; 
		document.getElementById('iInterno').value = "SIN INTERNO"; //Seteando valor del interno por defecto
		document.getElementById('iInterno').style.display="none";
		document.getElementById('marca').style.display="inline";
		document.getElementById('modelo').style.display="inline";
		form.lineaEmpresa.style.display = "none";
		form.marcaParticular.style.display = "none";
		form.marcaMoto.style.display = "none";
		form.modeloSinSeleccion.style.display = "none";
		$("#modeloP option:not(:first)").remove();
		$("#modeloM option:not(:first)").remove();
		document.getElementById('iTipo').style.display="none";
		document.getElementById('iTipo').value = "";
		document.getElementById('iMarca').style.display="none";
		document.getElementById('iMarca').value = "";
		document.getElementById('iModelo').style.display="none";
		document.getElementById('iModelo').value = "";
		////////////////////////////////////////////
		if(form.tipo[0].selected){
			//Mostrando las marcas sin seleccion
			form.marcaSinSeleccion.style.display = "inline";
			form.modeloSinSeleccion.style.display="inline";
			//Limpiando los valores de las demas selecciones
			$('#marcaParticular option:eq(0)').prop('selected', true);
			$('#marcaMoto option:eq(0)').prop('selected', true);
			$('#lineaEmpresa option:eq(0)').prop('selected', true);
		}
		
		if(form.tipo[1].selected){
			//Ocultando y mostrando los LABEL y SELECT correspondientes a particular
			form.marcaSinSeleccion.style.display = "none";
			form.marcaMoto.style.display = "none";
			form.modeloM.style.display = "none";
			form.marcaParticular.style.display = "inline";
			form.modeloP.style.display = "inline";
			//Cambiando el valor de las marcas de otras categorías a 0 ("Seleccionar")
			$('#marcaMoto option:eq(0)').prop('selected', true);
			$('#lineaEmpresa option:eq(0)').prop('selected', true);
			/////////////////////////////////////////////////////////////////////////
			if(form.marcaParticular[1].selected){
				$.each(mAcura, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[2].selected){
				$.each(mAlfaRomeo, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[3].selected){
				$.each(mAro, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[4].selected){
				$.each(mAudi, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[5].selected){
				$.each(mBMW, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[6].selected){
				$.each(mCadillac, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[7].selected){
				$.each(mChery, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[8].selected){
				$.each(mChevrolet, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[9].selected){
				$.each(mChrysler, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[10].selected){
				$.each(mCitroen, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[11].selected){
				$.each(mDS, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[12].selected){
				$.each(mDaewoo, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[13].selected){
				$.each(mDaihatsu, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[14].selected){
				$.each(mDodge, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[15].selected){
				$.each(mFerrari, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[16].selected){
				$.each(mFiat, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[17].selected){
				$.each(mFord, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[18].selected){
				$.each(mFordImportados, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[19].selected){
				$.each(mFoton, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[20].selected){
				$.each(mHonda, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[21].selected){
				$.each(mHyundai, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[22].selected){
				$.each(mIka, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[23].selected){
				$.each(mIsuzu, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[24].selected){
				$.each(mIveco, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[25].selected){
				$.each(mJaguar, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[26].selected){
				$.each(mJeep, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[27].selected){
				$.each(mKia, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[28].selected){
				$.each(mLada, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[29].selected){
				$.each(mLandRover, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[30].selected){
				$.each(mLifan, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[31].selected){
				$.each(mMG, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[32].selected){
				$.each(mMaserati, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[33].selected){
				$.each(mMazda, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[34].selected){
				$.each(mMercedesBenz, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[35].selected){
				$.each(mMini, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[36].selected){
				$.each(mMitsubishi, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[37].selected){
				$.each(mNissan, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[38].selected){
				$.each(mOpel, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[39].selected){
				$.each(mPeugeot, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[40].selected){
				$.each(mPorsche, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[41].selected){
				$.each(mRAM, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[42].selected){
				$.each(mRastrojero, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[43].selected){
				$.each(mRenault, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[44].selected){
				$.each(mRover, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[45].selected){
				$.each(mRugby, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[46].selected){
				$.each(mSaab, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[47].selected){
				$.each(mSeat, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[48].selected){
				$.each(mSmart, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[49].selected){
				$.each(mSsangyong, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[50].selected){
				$.each(mSubaru, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[51].selected){
				$.each(mSuzuki, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[52].selected){
				$.each(mToyota, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[53].selected){
				$.each(mVolkswagen, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[54].selected){
				$.each(mVolvo, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}
			if(form.marcaParticular[55].selected){
				$.each(mOtraMarca, function(i, el) 
						{    $('#modeloP').append( new Option(el.text,el.value) );});
			}		
		}
			
// ******************************************************************************************************************************************
// MOTOS		
// ******************************************************************************************************************************************
			
			
			
			var mAprilia = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mBMW = [{ text: 'F 650 GS', value: 'F 650 GS'}, { text: 'F800 R', value: 'F800 R'}, { text: 'G 650 GS', value: 'G 650 GS'}, { text: 'K 1200 LT', value: 'K 1200 LT'}, { text: 'K 1200 S', value: 'K 1200 S'}, { text: 'R 1150 GS Adventure', value: 'R 1150 GS Adventure'}, { text: 'R 1200 GS', value: 'R 1200 GS'}, { text: 'S 1000 RR', value: 'S 1000 RR'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mBajaj = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mBeta = [{ text: 'BK', value: 'BK'}, { text: 'BK 150 OHC', value: 'BK 150 OHC'}, { text: 'BS 110-1', value: 'BS 110-1'}, { text: 'Chrono 250', value: 'Chrono 250'}, { text: 'RR 450 Enduro', value: 'RR 450 Enduro'}, { text: 'Scooby', value: 'Scooby'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mBetamotor = [{ text: 'Motard 2.0', value: 'Motard 2.0'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mBloower = [{ text: 'GENESIS 250', value: 'GENESIS 250'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mBrava = [{ text: 'Altino 150cc', value: 'Altino 150cc'}, { text: 'Nevada', value: 'Nevada'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mCanAm = [{ text: 'DS', value: 'DS'}, { text: 'Outlader', value: 'Outlader'}, { text: 'Renegade', value: 'Renegade'}, { text: 'Spyder', value: 'Spyder'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mCerro = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mCorven = [{ text: 'Hunter 150', value: 'Hunter 150'}, { text: 'Triax', value: 'Triax'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mDaelim = [{ text: 'Roadwin 250R F1', value: 'Roadwin 250R F1'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mDayama = [{ text: 'YFD 400', value: 'YFD 400'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mDucati = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mGamma = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mGilera = [{ text: 'QM 125', value: 'QM 125'}, { text: 'SMASH 110 CC', value: 'SMASH 110 CC'}, { text: 'VC 150cc', value: 'VC 150cc'}, { text: 'VC150 Strada', value: 'VC150 Strada'}, { text: 'Vc 70', value: 'Vc 70'}, { text: 'YL 150', value: 'YL 150'}, { text: 'YL 150 Chopera', value: 'YL 150 Chopera'}, { text: 'YL 200 Chopera', value: 'YL 200 Chopera'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mGuzzi = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mHarleyDavidson = [{ text: 'Dyna Fat Bob FXDF', value: 'Dyna Fat Bob FXDF'}, { text: 'Dyna Wide Glide', value: 'Dyna Wide Glide'}, { text: 'Sportster 883', value: 'Sportster 883'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mHonda = [{ text: '125 CG', value: '125 CG'}, { text: '650 Dominator', value: '650 Dominator'}, { text: '750 Africa Twin', value: '750 Africa Twin'}, { text: 'Biz C 125', value: 'Biz C 125'}, { text: 'CB 250', value: 'CB 250'}, { text: 'CBR 1000', value: 'CBR 1000'}, { text: 'CBR 1000 RR', value: 'CBR 1000 RR'}, { text: 'CBR 600', value: 'CBR 600'}, { text: 'CBR 600 FS Sports', value: 'CBR 600 FS Sports'}, { text: 'CBR 900', value: 'CBR 900'}, { text: 'CBX 250', value: 'CBX 250'}, { text: 'CBX 250 Twister', value: 'CBX 250 Twister'}, { text: 'CG 150', value: 'CG 150'}, { text: 'CG 150 ESD', value: 'CG 150 ESD'}, { text: 'CG ESD Titan 150', value: 'CG ESD Titan 150'}, { text: 'CR 125 R6', value: 'CR 125 R6'}, { text: 'CR 85 R6', value: 'CR 85 R6'}, { text: 'CRF 250', value: 'CRF 250'}, { text: 'Elite 125cc', value: 'Elite 125cc'}, { text: 'Falcon 400cc Spirit Adventure', value: 'Falcon 400cc Spirit Adventure'}, { text: 'GL 1800 GoldWing', value: 'GL 1800 GoldWing'}, { text: 'NT 700v Deauville', value: 'NT 700v Deauville'}, { text: 'NX 400 Falcon', value: 'NX 400 Falcon'}, { text: 'NX4', value: 'NX4'}, { text: 'TRX 250', value: 'TRX 250'}, { text: 'TRX 300', value: 'TRX 300'}, { text: 'TRX 350', value: 'TRX 350'}, { text: 'Transalp 600', value: 'Transalp 600'}, { text: 'VT 600 Shadow', value: 'VT 600 Shadow'}, { text: 'VT 750 Shadow', value: 'VT 750 Shadow'}, { text: 'XR 125 L', value: 'XR 125 L'}, { text: 'XR 250', value: 'XR 250'}, { text: 'XR 250 Tornado', value: 'XR 250 Tornado'}, { text: 'XR 400 R4', value: 'XR 400 R4'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mHusqvarna = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mJaguar = [{ text: 'ATV Deportivo', value: 'ATV Deportivo'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mJawa = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mJianshe = [{ text: 'JS-125 6B', value: 'JS-125 6B'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mKTM = [{ text: '450 EXC', value: '450 EXC'}, { text: '990 Adventure R', value: '990 Adventure R'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mKawasaki = [{ text: 'Bruteforce', value: 'Bruteforce'}, { text: 'ER-6N', value: 'ER-6N'}, { text: 'KFX 90', value: 'KFX 90'}, { text: 'KLR 650', value: 'KLR 650'}, { text: 'Ninja R', value: 'Ninja R'}, { text: 'Ninja ZX-10R', value: 'Ninja ZX-10R'}, { text: 'VN 1500 Classic', value: 'VN 1500 Classic'}, { text: 'Versys', value: 'Versys'}, { text: 'Vulcan VN 500', value: 'Vulcan VN 500'}, { text: 'Vulcan VN900 Classic', value: 'Vulcan VN900 Classic'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mKeeway = [{ text: 'RK V', value: 'RK V'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mKeller = [{ text: 'Jet-Max 250', value: 'Jet-Max 250'}, { text: 'K-65', value: 'K-65'}, { text: 'Quasar 260', value: 'Quasar 260'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mKymco = [{ text: 'Agility', value: 'Agility'}, { text: 'Like', value: 'Like'}, { text: 'MXU', value: 'MXU'}, { text: 'People', value: 'People'}, { text: 'People 250', value: 'People 250'}, { text: 'Venox 250', value: 'Venox 250'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mMondial = [{ text: 'DAX 70', value: 'DAX 70'}, { text: 'FD 200 S', value: 'FD 200 S'}, { text: 'HD 250', value: 'HD 250'}, { text: 'MD 150', value: 'MD 150'}, { text: 'MS 100 E', value: 'MS 100 E'}, { text: 'TD 150 L', value: 'TD 150 L'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mMotomel = [{ text: 'CG 150', value: 'CG 150'}, { text: 'CG 150 S III (serie 3)', value: 'CG 150 S III (serie 3)'}, { text: 'CG 150 S II (serie 2)', value: 'CG 150 S II (serie 2)'}, { text: 'Hyosung GT 250', value: 'Hyosung GT 250'}, { text: 'Kraken', value: 'Kraken'}, { text: 'Lynk 110', value: 'Lynk 110'}, { text: 'Max 110', value: 'Max 110'}, { text: 'Meguelli', value: 'Meguelli'}, { text: 'SKUA', value: 'SKUA'}, { text: 'Strato', value: 'Strato'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mPanther = [{ text: '110R', value: '110R'}, { text: 'WR250', value: 'WR250'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mPiaggio = [{ text: 'Vespa 200', value: 'Vespa 200'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mPiaggioVespa = [{ text: 'Otro Modelo', value: 'Otro'}];	
			var mPolaris = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mRoyalEnfield = [{ text: 'Bullet Classic', value: 'Bullet Classic'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mSYM = [{ text: 'Quadlander', value: 'Quadlander'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mSiambretta = [{ text: 'FT 125', value: 'FT 125'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mSuzuki = [{ text: 'AN 125', value: 'AN 125'}, { text: 'AX 100', value: 'AX 100'}, { text: 'Burgman 650', value: 'Burgman 650'}, { text: 'DR 125', value: 'DR 125'}, { text: 'EN 125', value: 'EN 125'}, { text: 'GN 125', value: 'GN 125'}, { text: 'GSX-F 600', value: 'GSX-F 600'}, { text: 'V Strom 650 (DL 650)', value: 'V Strom 650 (DL 650)'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mTriumph = [{ text: 'Thruxton Speed Master', value: 'Thruxton Speed Master'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mVespa = [{ text: 'LX', value: 'LX'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mXScreams = [{ text: 'Kaptor 150cc', value: 'Kaptor 150cc'}, { text: 'Otro Modelo', value: 'Otro'}];	
			var mXingyue = [{ text: 'Otro Modelo', value: 'Otro'}];
			var mYamaha = [{ text: 'AXIS 90 CC', value: 'AXIS 90 CC'}, { text: 'Banshee', value: 'Banshee'}, { text: 'Crypton', value: 'Crypton'}, { text: 'Drag Star 650', value: 'Drag Star 650'}, { text: 'FZ16', value: 'FZ16'}, { text: 'FZS 1000 Fazer', value: 'FZS 1000 Fazer'}, { text: 'Grizzly', value: 'Grizzly'}, { text: 'Raptor', value: 'Raptor'}, { text: 'Raptor 350 R', value: 'Raptor 350 R'}, { text: 'Raptor 700 R', value: 'Raptor 700 R'}, { text: 'XP 500 T-Max', value: 'XP 500 T-Max'}, { text: 'XT 225 E', value: 'XT 225 E'}, { text: 'XTZ', value: 'XTZ'}, { text: 'Xtz 250', value: 'Xtz 250'}, { text: 'YBR 125', value: 'YBR 125'}, { text: 'YBR 125 ED', value: 'YBR 125 ED'}, { text: 'YBR 125 K', value: 'YBR 125 K'}, { text: 'YBR 250', value: 'YBR 250'}, { text: 'YFM 700 Raptor', value: 'YFM 700 Raptor'}, { text: 'YFS 200', value: 'YFS 200'}, { text: 'YFZ 350R Raptor', value: 'YFZ 350R Raptor'}, { text: 'YFZ 450', value: 'YFZ 450'}, { text: 'YFZ R 450', value: 'YFZ R 450'}, { text: 'YZ 250', value: 'YZ 250'}, { text: 'YZF-R1', value: 'YZF-R1'}, { text: 'YZF-R6', value: 'YZF-R6'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mZanella = [{ text: 'FX 110', value: 'FX 110'}, { text: 'GForce 500 Series', value: 'GForce 500 Series'}, { text: 'Mod 150', value: 'Mod 150'}, { text: 'Patagonian Eagle 150', value: 'Patagonian Eagle 150'}, { text: 'Patagonian Eagle 250', value: 'Patagonian Eagle 250'}, { text: 'RX 150', value: 'RX 150'}, { text: 'RX 200', value: 'RX 200'}, { text: 'RX 200 R E', value: 'RX 200 R E'}, { text: 'RZ 25 Naked', value: 'RZ 25 Naked'}, { text: 'Raptor', value: 'Raptor'}, { text: 'Styler 125', value: 'Styler 125'}, { text: 'Styler 150 R16', value: 'Styler 150 R16'}, { text: 'Styler 50 Classic', value: 'Styler 50 Classic'}, { text: 'Styler Cruiser', value: 'Styler Cruiser'}, { text: 'Styler Exclusive Edizione Limitata', value: 'Styler Exclusive Edizione Limitata'}, { text: 'Styler Exclusive Z3', value: 'Styler Exclusive Z3'}, { text: 'Tricargo', value: 'Tricargo'}, { text: 'Tricargo Max', value: 'Tricargo Max'}, { text: 'ZB 110', value: 'ZB 110'}, { text: 'ZR 150', value: 'ZR 150'}, { text: 'ZR 250 LT', value: 'ZR 250 LT'}, { text: 'Otro Modelo', value: 'Otro'}];
			var mOtraMarca = [{ text: 'Otro Modelo', value: 'Otro'}];	
			
			
			
				
			//var mCadillac = [{ text: '', value: ''}, { text: 'Otro Modelo', value: 'Otro'}];	
				
				
				
				
				
			if(form.tipo[2].selected){
				//Ocultando y mostrando los SELECT correspondientes a moto
				form.marcaParticular.style.display = "none";
				form.marcaSinSeleccion.style.display = "none";
				form.marcaMoto.style.display = "inline";
				form.modeloP.style.display = "none";
				form.modeloM.style.display = "inline";
				//Cambiando el valor de las marcas de otras categorías a 0 ("Seleccionar")
				$('#marcaParticular option:eq(0)').prop('selected', true);
				//////////////////////////////////////////////////////////
				if(form.marcaMoto[1].selected){
					$.each(mAprilia, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[2].selected){
					$.each(mBMW, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[3].selected){
					$.each(mBajaj, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[4].selected){
					$.each(mBeta, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[5].selected){
					$.each(mBetamotor, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[6].selected){
					$.each(mBloower, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[7].selected){
					$.each(mBrava, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[8].selected){
					$.each(mCanAm, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[9].selected){
					$.each(mCerro, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[10].selected){
					$.each(mCorven, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[11].selected){
					$.each(mDaelim, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[12].selected){
					$.each(mDayama, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[13].selected){
					$.each(mDucati, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[14].selected){
					$.each(mGamma, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[15].selected){
					$.each(mGilera, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[16].selected){
					$.each(mGuzzi, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[17].selected){
					$.each(mHarleyDavidson, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[18].selected){
					$.each(mHonda, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[19].selected){
					$.each(mHusqvarna, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[20].selected){
					$.each(mJaguar, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[21].selected){
					$.each(mJawa, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[22].selected){
					$.each(mJianshe, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[23].selected){
					$.each(mKTM, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[24].selected){
					$.each(mKawasaki, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[25].selected){
					$.each(mKeeway, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[26].selected){
					$.each(mKeller, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[27].selected){
					$.each(mKymco, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[28].selected){
					$.each(mMondial, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[29].selected){
					$.each(mMotomel, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[30].selected){
					$.each(mPanther, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[31].selected){
					$.each(mPiaggio, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[32].selected){
					$.each(mPiaggioVespa, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[33].selected){
					$.each(mPolaris, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[34].selected){
					$.each(mRoyalEnfield, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[35].selected){
					$.each(mSYM, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[36].selected){
					$.each(mSiambretta, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[37].selected){
					$.each(mSuzuki, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[38].selected){
					$.each(mTriumph, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[39].selected){
					$.each(mVespa, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[40].selected){
					$.each(mXScreams, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[41].selected){
					$.each(mXingyue, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[42].selected){
					$.each(mYamaha, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[43].selected){
					$.each(mZanella, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
				if(form.marcaMoto[44].selected){
					$.each(mOtraMarca, function(i, el) 
							{    $('#modeloM').append( new Option(el.text,el.value) );});
				}
			}	
			
			
// ******************************************************************************************************************************************
// COLECTIVOS		
// ******************************************************************************************************************************************
			
			var lineaEmpresa1 = [{ text: 'Transportes San Cayetano S.A.C.', value: 'Transportes San Cayetano S.A.C.'}];
			var lineaEmpresa2 = [{ text: 'Transportes Veintidos de Septiembre S.A.C.', value: 'Transportes Veintidos de Septiembre S.A.C.'}];
			var lineaEmpresa4 = [{ text: 'Transportes Sol de Mayo C.I.S.A.', value: 'Transportes Sol de Mayo C.I.S.A.'}];
			var lineaEmpresa5 = [{ text: 'Transportes Rio Grande S.A.C.I.F.', value: 'Transportes Rio Grande S.A.C.I.F.'}];
			var lineaEmpresa6 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaEmpresa7 = [{ text: 'Transportes Automotores 12 de Octubre S.A.C.', value: 'Transportes Automotores 12 de Octubre S.A.C.'}];
			var lineaEmpresa8 = [{ text: 'Transportes Rio Grande S.A.C.I.F.', value: 'Transportes Rio Grande S.A.C.I.F.'}];
			var lineaEmpresa9 = [{ text: 'General Tomas Guido S.A.', value: 'General Tomas Guido S.A.'}];
			var lineaEmpresa10 = [{ text: 'Linea 10 S.A.', value: 'Linea 10 S.A.'}];
			var lineaEmpresa12 = [{ text: 'Transportes Automotores Callao S.A.', value: 'Transportes Automotores Callao S.A.'}];
			var lineaEmpresa15 = [{ text: 'Transportes Sur-Nor C.I.S.A.', value: 'Transportes Sur-Nor C.I.S.A.'}];
			var lineaEmpresa17 = [{ text: 'Linea 17 S.A.', value: 'Linea 17 S.A.'}];
			var lineaEmpresa19 = [{ text: 'Microomnibus Saavedra S.A. - Grupo ERSA', value: 'Microomnibus Saavedra S.A. - Grupo ERSA'}];
			var lineaEmpresa20 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaEmpresa21 = [{ text: 'Empresa Teniente General Roca S.A.', value: 'Empresa Teniente General Roca S.A.'}];
			var lineaEmpresa22 = [{ text: 'Linea 22 S.A.', value: 'Linea 22 S.A.'}];
			var lineaEmpresa23 = [{ text: 'Transportes Rio Grande S.A.C.I.F.', value: 'Transportes Rio Grande S.A.C.I.F.'}];
			var lineaEmpresa24 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaEmpresa25 = [{ text: 'General Tomas Guido S.A.', value: 'General Tomas Guido S.A.'}];
			var lineaEmpresa26 = [{ text: '17 de Agosto S.A.', value: '17 de Agosto S.A.'}];
			var lineaEmpresa28 = [{ text: 'DOTA S.A.', value: 'DOTA S.A.'}];
			var lineaEmpresa29 = [{ text: 'Empresa de Transporte Pedro de Mendoza', value: 'Empresa de Transporte Pedro de Mendoza'}];
			var lineaEmpresa31 = [{ text: 'ROCARAZA S.A.', value: 'ROCARAZA S.A.'}];
			var lineaEmpresa32 = [{ text: 'El Puente S.A.T.', value: 'El Puente S.A.T.'}];
			var lineaEmpresa33 = [{ text: 'Transportes Almirante Brown S.A.', value: 'Transportes Almirante Brown S.A.'}];
			var lineaEmpresa34 = [{ text: 'Juan B. Justo S.A.T.C.I.', value: 'Juan B. Justo S.A.T.C.I.'}];
			var lineaEmpresa36 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa37 = [{ text: '4 de Septiembre S.A.T.C.P', value: '4 de Septiembre S.A.T.C.P'}];
			var lineaEmpresa39 = [{ text: 'Transportes Santa Fe S.A.C.I.', value: 'Transportes Santa Fe S.A.C.I.'}];
			var lineaEmpresa41 = [{ text: 'Azul S.A.T.A.', value: 'Azul S.A.T.A.'}];
			var lineaEmpresa42 = [{ text: 'Transportes Colegiales S.A.C.I.', value: 'Transportes Colegiales S.A.C.I.'}];
			var lineaEmpresa44 = [{ text: 'DOTA S.A.', value: 'DOTA S.A.'}];
			var lineaEmpresa45 = [{ text: 'Micro omnibus Cuarenta y Cinco S.A.C.I.F', value: 'Micro omnibus Cuarenta y Cinco S.A.C.I.F'}];
			var lineaEmpresa46 = [{ text: 'Union Transportista de Empresas S.A. - UTE S.A.', value: 'Union Transportista de Empresas S.A. - UTE S.A.'}];
			var lineaEmpresa47 = [{ text: 'Linea de Microomnibus 47 S.A.', value: 'Linea de Microomnibus 47 S.A.'}];
			var lineaEmpresa49 = [{ text: 'Buenos Aires Bus S.A.', value: 'Buenos Aires Bus S.A.'}];
			var lineaEmpresa50 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaEmpresa51 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaEmpresa53 = [{ text: 'Linea 213 S.A. de Transportes', value: 'Linea 213 S.A. de Transportes'}];
			var lineaEmpresa55 = [{ text: 'Almafuerte S.A.T.A.C.I.', value: 'Almafuerte S.A.T.A.C.I.'}];
			var lineaEmpresa56 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaEmpresa57 = [{ text: 'Transportes Atlantica S.A. Comercial', value: 'Transportes Atlantica S.A. Comercial'}];
			var lineaEmpresa59 = [{ text: 'Microomnibus Ciudad de Buenos Aires S.A.T.C.I.', value: 'Microomnibus Ciudad de Buenos Aires S.A.T.C.I.'}];
			var lineaEmpresa60 = [{ text: 'Micro omnibus Norte S.A. (MONSA)', value: 'Micro omnibus Norte S.A. (MONSA)'}];
			var lineaEmpresa61 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa62 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa63 = [{ text: 'Bernardino Rivadavia S.A.T.A.', value: 'Bernardino Rivadavia S.A.T.A.'}];
			var lineaEmpresa64 = [{ text: 'Vuelta de Rocha S.A.T.A.C.I.', value: 'Vuelta de Rocha S.A.T.A.C.I.'}];
			var lineaEmpresa65 = [{ text: 'La Nueva Metropol S.A.T.A.C.I.', value: 'La Nueva Metropol S.A.T.A.C.I.'}];
			var lineaEmpresa67 = [{ text: 'Transportes del Tejar S.A.', value: 'Transportes del Tejar S.A.'}];
			var lineaEmpresa68 = [{ text: 'Transportes Sesenta y Ocho S.R.L.', value: 'Transportes Sesenta y Ocho S.R.L.'}];
			var lineaEmpresa70 = [{ text: 'Transportes 270 S.A.', value: 'Transportes 270 S.A.'}];
			var lineaEmpresa71 = [{ text: 'Lina 71 S.A.', value: 'Lina 71 S.A.'}];
			var lineaEmpresa74 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaEmpresa75 = [{ text: 'El Puente S.A.T.', value: 'El Puente S.A.T.'}];
			var lineaEmpresa76 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaEmpresa78 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaEmpresa79 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaEmpresa80 = [{ text: 'Transportes Nueva Chicago C.I.S.A.', value: 'Transportes Nueva Chicago C.I.S.A.'}];
			var lineaEmpresa84 = [{ text: 'General Tomas Guido S.A.', value: 'General Tomas Guido S.A.'}];
			var lineaEmpresa85 = [{ text: 'Sociedad Anonima Expreso Sudoeste', value: 'Sociedad Anonima Expreso Sudoeste'}];
			var lineaEmpresa86 = [{ text: 'DUVI S.A.', value: 'DUVI S.A.'}];
			var lineaEmpresa87 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaEmpresa88 = [{ text: 'Linea Expreso Liniers S.A.I.C.', value: 'Linea Expreso Liniers S.A.I.C.'}];
			var lineaEmpresa90 = [{ text: 'Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)', value: 'Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)'}];
			var lineaEmpresa91 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaEmpresa92 = [{ text: 'Empresa de Transportes Microomnibus Saenz Pe\u00F1a S.R.L.', value: 'Empresa de Transportes Microomnibus Saenz Peña S.R.L.'}];
			var lineaEmpresa93 = [{ text: 'Transportes 1º de Septiembre S.A.', value: 'Transportes 1º de Septiembre S.A.'}];
			var lineaEmpresa95 = [{ text: 'Empresa Antantida Argentina S.A.T.', value: 'Empresa Antantida Argentina S.A.T.'}];
			var lineaEmpresa96 = [{ text: 'Transporte Ideal San Justo S.A.', value: 'Transporte Ideal San Justo S.A.'}];
			var lineaEmpresa97 = [{ text: 'Bus del Oeste S.A.', value: 'Bus del Oeste S.A.'}];
			var lineaEmpresa98 = [{ text: 'Expreso Quilmes S.A.', value: 'Expreso Quilmes S.A.'}];
			var lineaEmpresa99 = [{ text: 'Transportes 27 de Junio S.A.C.I.F.', value: 'Transportes 27 de Junio S.A.C.I.F.'}];
			var lineaEmpresa100 = [{ text: 'Transportes Automotores Riachuelo S.A. (TARSA)', value: 'Transportes Automotores Riachuelo S.A. (TARSA)'}];
			var lineaEmpresa101 = [{ text: 'DOTA S.A.', value: 'DOTA S.A.'}];
			var lineaEmpresa102 = [{ text: 'Transportes Sargento Cabral Sociedad Colectiva', value: 'Transportes Sargento Cabral Sociedad Colectiva'}];
			var lineaEmpresa103 = [{ text: 'Transportes Quirno Costa S.A.C.I.', value: 'Transportes Quirno Costa S.A.C.I.'}];
			var lineaEmpresa104 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa105 = [{ text: 'Empresa de Transportes America S.A.C.I.', value: 'Empresa de Transportes America S.A.C.I.'}];
			var lineaEmpresa106 = [{ text: 'Colectiveros Unidos S.A.I.F. (CUSA)', value: 'Colectiveros Unidos S.A.I.F. (CUSA)'}];
			var lineaEmpresa107 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaEmpresa108 = [{ text: 'Empresa Teniente General Roca S.A.', value: 'Empresa Teniente General Roca S.A.'}];
			var lineaEmpresa109 = [{ text: 'Transportes 9 de Julio S.A.C.', value: 'Transportes 9 de Julio S.A.C.'}];
			var lineaEmpresa110 = [{ text: 'General Pueyrredon S.A.T.C.I', value: 'General Pueyrredon S.A.T.C.I'}];
			var lineaEmpresa111 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaEmpresa112 = [{ text: 'Expreso Lomas S.A.', value: 'Expreso Lomas S.A.'}];
			var lineaEmpresa113 = [{ text: 'Bernardino Rivadavia S.A.T.A.', value: 'Bernardino Rivadavia S.A.T.A.'}];
			var lineaEmpresa114 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa115 = [{ text: 'Transportes Automotores Riachuelo S.A. (TARSA)', value: 'Transportes Automotores Riachuelo S.A. (TARSA)'}];
			var lineaEmpresa117 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaEmpresa118 = [{ text: 'Microomnibus Barrancas de Belgrano S.A.', value: 'Microomnibus Barrancas de Belgrano S.A.'}];
			var lineaEmpresa123 = [{ text: 'Transportes Linea 123 S.A.C.I.', value: 'Transportes Linea 123 S.A.C.I.'}];
			var lineaEmpresa124 = [{ text: 'Transportes Automotores Callao S.A.', value: 'Transportes Automotores Callao S.A.'}];
			var lineaEmpresa126 = [{ text: 'Cardenas S.A. Empresa de Transportes', value: 'Cardenas S.A. Empresa de Transportes'}];
			var lineaEmpresa127 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaEmpresa128 = [{ text: 'El Puente S.A.T.', value: 'El Puente S.A.T.'}];
			var lineaEmpresa129 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa130 = [{ text: 'Transportes Avenida Bernardo Ader S.A. (TABA)', value: 'Transportes Avenida Bernardo Ader S.A. (TABA)'}];
			var lineaEmpresa132 = [{ text: 'Nuevos Rumbos S.A', value: 'Nuevos Rumbos S.A'}];
			var lineaEmpresa133 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa134 = [{ text: 'Transportes Automotores Riachuelo S.A. (TARSA)', value: 'Transportes Automotores Riachuelo S.A. (TARSA)'}];
			var lineaEmpresa135 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaEmpresa136 = [{ text: 'Sargento Cabral S.A. de Transporte', value: 'Sargento Cabral S.A. de Transporte'}];
			var lineaEmpresa140 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa141 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa143 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaEmpresa146 = [{ text: 'ROCARAZA S.A.', value: 'ROCARAZA S.A.'}];
			var lineaEmpresa148 = [{ text: 'El Nuevo Halcon S.A.', value: 'El Nuevo Halcon S.A.'}];
			var lineaEmpresa150 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaEmpresa151 = [{ text: 'Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)', value: 'Micro Omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)'}];
			var lineaEmpresa152 = [{ text: 'Empresa Tandilense S.A.C.I.F.I.Y DE S.', value: 'Empresa Tandilense S.A.C.I.F.I.Y DE S.'}];
			var lineaEmpresa153 = [{ text: 'Microomnibus Saavedra S.A. - Grupo ERSA', value: 'Microomnibus Saavedra S.A. - Grupo ERSA'}];
			var lineaEmpresa154 = [{ text: 'Micro omnibus Cuarenta y Cinco S.A.C.I.F', value: 'Micro Omnibus Cuarenta y Cinco S.A.C.I.F'}];
			var lineaEmpresa159 = [{ text: 'Micro Omnibus Quilmes S.A.C.I.F. (MOQSA)', value: 'Micro Omnibus Quilmes S.A.C.I.F. (MOQSA)'}];
			var lineaEmpresa160 = [{ text: 'Micro omnibus Sur S.A.C.', value: 'Micro Omnibus Sur S.A.C.'}];
			var lineaEmpresa161 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaEmpresa163 = [{ text: 'Sargento Cabral S.A. de Transporte', value: 'Sargento Cabral S.A. de Transporte'}];
			var lineaEmpresa165 = [{ text: 'Expreso Lomas S.A.', value: 'Expreso Lomas S.A.'}];
			var lineaEmpresa166 = [{ text: 'Empresa Linea 216 S.A.T.', value: 'Empresa Linea 216 S.A.T.'}];
			var lineaEmpresa168 = [{ text: 'Expreso San Isidro S.A. (ESISA)', value: 'Expreso San Isidro S.A. (ESISA)'}];
			var lineaEmpresa169 = [{ text: 'Transporte Escalada S.A.', value: 'Transporte Escalada S.A.'}];
			var lineaEmpresa172 = [{ text: 'La Caba\u00F1a S.A.', value: 'La Cabaña S.A.'}];
			var lineaEmpresa172 = [{ text: 'La Caba\u00F1a S.A.', value: 'La Cabaña S.A.'}];
			var lineaEmpresa175 = [{ text: 'Transporte Escalada S.A.', value: 'Transporte Escalada S.A.'}];
			var lineaEmpresa176 = [{ text: 'Expreso General Sarmiento S.A.', value: 'Expreso General Sarmiento S.A.'}];
			var lineaEmpresa177 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaEmpresa178 = [{ text: 'Compa\u00F1ia de Microomnibus La Colorada S.A.C.I.', value: 'Compañia de Microomnibus La Colorada S.A.C.I.'}];
			var lineaEmpresa179 = [{ text: 'Grupo Linea 179 S.A.', value: 'Grupo Linea 179 S.A.'}];
			var lineaEmpresa180 = [{ text: 'La Vecinal de Matanza S.A.C.I. de Microomnibus', value: 'La Vecinal de Matanza S.A.C.I. de Microomnibus'}];
			var lineaEmpresa181 = [{ text: 'Transporte Automotor de Pasajeros Siglo XXI S.A.', value: 'Transporte Automotor de Pasajeros Siglo XXI S.A.'}];
			var lineaEmpresa182 = [{ text: 'Sargento Cabral S.A. de Transporte', value: 'Sargento Cabral S.A. de Transporte'}];
			var lineaEmpresa184 = [{ text: 'La Central de Vicente Lopez S.A.C.', value: 'La Central de Vicente Lopez S.A.C.'}];
			var lineaEmpresa185 = [{ text: 'Transporte Ideal San Justo S.A.', value: 'Transporte Ideal San Justo S.A.'}];
			var lineaEmpresa188 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaEmpresa193 = [{ text: 'DUVI S.A.', value: 'DUVI S.A.'}];
			var lineaEmpresa194 = [{ text: 'La Nueva Metropol S.A.T.A.C.I.', value: 'La Nueva Metropol S.A.T.A.C.I.'}];
			var lineaEmpresa195 = [{ text: 'La Nueva Metropol S.A.T.A.C.I.', value: 'La Nueva Metropol S.A.T.A.C.I.'}];
			
		//	var lineaColectivo = [{ text: '', value: ''}];
			if(form.tipo[7].selected){
				//Ocultando y mostrando los LABEL e INPUT correspondientes a colectivo
				document.getElementById('marca').style.display="none";
				document.getElementById('linea').style.display="inline";
				document.getElementById('modelo').style.display="none";
				document.getElementById('interno').style.display="inline";
				document.getElementById('iInterno').style.display="inline";
				//Ocultando y mostrando los SELECT correspondientes a colectivo
				form.marcaSinSeleccion.style.display = "none";
				form.modeloP.style.display = "none";
				form.modeloM.style.display = "none";
				form.lineaEmpresa.style.display = "inline";
				//Cambiando el valor de las marcas de otras categorías a 0 ("Seleccionar")
				$('#marcaParticular option:eq(0)').prop('selected', true);
				$('#marcaMoto option:eq(0)').prop('selected', true);
				//Cambiando valor del interno para validar en el formulario y controlador
				document.getElementById('iInterno').value = "";
				//$.each(lineaColectivo1, function(i, el) 
						//{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
			}	
			
			if(form.tipo[3].selected || form.tipo[4].selected || form.tipo[5].selected || form.tipo[6].selected || form.tipo[9].selected || form.tipo[10].selected){
				//Limpiando y mostrando los SELECT correspondientes a éstas opciones
				form.marcaSinSeleccion.style.display = "none";
				form.modeloP.style.display = "none";
				form.modeloM.style.display = "none";
				//form.empresaColectivo.style.display = "none";
				document.getElementById('iMarca').style.display="inline";
				document.getElementById('iModelo').style.display="inline";
				//Cambiando el valor de las marcas de otras categorías a 0 ("Seleccionar")
				$('#marcaParticular option:eq(0)').prop('selected', true);
				$('#marcaMoto option:eq(0)').prop('selected', true);
				$('#lineaColectivo option:eq(0)').prop('selected', true);
				///////////////////////////////////////////////////////////////////////
				if(form.tipo[10].selected){
					document.getElementById('iTipo').style.display="inline";
				}
			}
// ******************************************************************************************************************************************
// ******************************************************************************************************************************************
		
			//$('#tipo').empty();
			//$("#selectBox option[value='option1']").remove();
			//this.$('select#tipo').append('<option value="prueba">proban2</option>');
			//$("#tipo option[value='TAXI']").hide();
			//$("#tipo option[value='TAXI']").show();
			//$('select').children('option:not(:first)').remove(); eliminar todas menos la primera
		
	}
// ****************************************************************************************************************************************** 		
		