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
		
		//Inicializando TODO por defecto
		document.getElementById('linea').style.display="none";
		document.getElementById('empresa').style.display="none";
		document.getElementById('marca').style.display="inline";
		document.getElementById('modelo').style.display="inline";
		form.lineaColectivo.style.display = "none";
		form.empresaColectivo.style.display = "none";
		form.marcaParticular.style.display = "none";
		form.marcaMoto.style.display = "none";
		$("#modeloP option:not(:first)").remove();
		$("#modeloM option:not(:first)").remove();
		$("#empresaColectivo option:not(:first)").remove();
		////////////////////////////////////////////
		
		if(form.tipo[1].selected){
			//Ocultando y mostrando los LABEL correspondientes a particular
			form.marcaSinSeleccion.style.display = "none";
			form.marcaMoto.style.display = "none";
			form.modeloM.style.display = "none";
			form.marcaParticular.style.display = "inline";
			form.modeloP.style.display = "inline";
			//Limpiando los SELECT correspondientes a todos los modelos
			//Cambiando el valor de las marcas de otras categorías a 0 ("Seleccionar")
			$('#marcaMoto option:eq(0)').prop('selected', true);
			$('#lineaColectivo option:eq(0)').prop('selected', true);
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
			
			var lineaColectivo1 = [{ text: 'Transportes San Cayetano S.A.C.', value: 'Transportes San Cayetano S.A.C.'}];
			var lineaColectivo2 = [{ text: 'Transportes Veintidos de Septiembre S.A.C.', value: 'Transportes Veintidos de Septiembre S.A.C.'}];
			var lineaColectivo4 = [{ text: 'Transportes Sol de Mayo C.I.S.A.', value: 'Transportes Sol de Mayo C.I.S.A.'}];
			var lineaColectivo5 = [{ text: 'Transportes Rio Grande S.A.C.I.F.', value: 'Transportes Rio Grande S.A.C.I.F.'}];
			var lineaColectivo6 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaColectivo7 = [{ text: 'Transportes Automotores 12 de Octubre S.A.C.', value: 'Transportes Automotores 12 de Octubre S.A.C.'}];
			var lineaColectivo8 = [{ text: 'Transportes Rio Grande S.A.C.I.F.', value: 'Transportes Rio Grande S.A.C.I.F.'}];
			var lineaColectivo9 = [{ text: 'General Tomas Guido S.A.', value: 'General Tomas Guido S.A.'}];
			var lineaColectivo10 = [{ text: 'Linea 10 S.A.', value: 'Linea 10 S.A.'}];
			var lineaColectivo12 = [{ text: 'Transportes Automotores Callao S.A.', value: 'Transportes Automotores Callao S.A.'}];
			var lineaColectivo15 = [{ text: 'Transportes Sur-Nor C.I.S.A.', value: 'Transportes Sur-Nor C.I.S.A.'}];
			var lineaColectivo17 = [{ text: 'Linea 17 S.A.', value: 'Linea 17 S.A.'}];
			var lineaColectivo19 = [{ text: 'Microomnibus Saavedra S.A. - Grupo ERSA', value: 'Microomnibus Saavedra S.A. - Grupo ERSA'}];
			var lineaColectivo20 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaColectivo21 = [{ text: 'Empresa Teniente General Roca S.A.', value: 'Empresa Teniente General Roca S.A.'}];
			var lineaColectivo22 = [{ text: 'Linea 22 S.A.', value: 'Linea 22 S.A.'}];
			var lineaColectivo23 = [{ text: 'Transportes Rio Grande S.A.C.I.F.', value: 'Transportes Rio Grande S.A.C.I.F.'}];
			var lineaColectivo24 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaColectivo25 = [{ text: 'General Tomas Guido S.A.', value: 'General Tomas Guido S.A.'}];
			var lineaColectivo26 = [{ text: '17 de Agosto S.A.', value: '17 de Agosto S.A.'}];
			var lineaColectivo28 = [{ text: 'DOTA S.A.', value: 'DOTA S.A.'}];
			var lineaColectivo29 = [{ text: 'Empresa de Transporte Pedro de Mendoza', value: 'Empresa de Transporte Pedro de Mendoza'}];
			var lineaColectivo31 = [{ text: 'ROCARAZA S.A.', value: 'ROCARAZA S.A.'}];
			var lineaColectivo32 = [{ text: 'El Puente S.A.T.', value: 'El Puente S.A.T.'}];
			var lineaColectivo33 = [{ text: 'Transportes Almirante Brown S.A.', value: 'Transportes Almirante Brown S.A.'}];
			var lineaColectivo34 = [{ text: 'Juan B. Justo S.A.T.C.I.', value: 'Juan B. Justo S.A.T.C.I.'}];
			var lineaColectivo36 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo37 = [{ text: '4 de Septiembre S.A.T.C.P', value: '4 de Septiembre S.A.T.C.P'}];
			var lineaColectivo39 = [{ text: 'Transportes Santa Fe S.A.C.I.', value: 'Transportes Santa Fe S.A.C.I.'}];
			var lineaColectivo41 = [{ text: 'Azul S.A.T.A.', value: 'Azul S.A.T.A.'}];
			var lineaColectivo42 = [{ text: 'Transportes Colegiales S.A.C.I.', value: 'Transportes Colegiales S.A.C.I.'}];
			var lineaColectivo44 = [{ text: 'DOTA S.A.', value: 'DOTA S.A.'}];
			var lineaColectivo45 = [{ text: 'Micro omnibus Cuarenta y Cinco S.A.C.I.F', value: 'Micro omnibus Cuarenta y Cinco S.A.C.I.F'}];
			var lineaColectivo46 = [{ text: 'Union Transportista de Empresas S.A. - UTE S.A.', value: 'Union Transportista de Empresas S.A. - UTE S.A.'}];
			var lineaColectivo47 = [{ text: 'Linea de Microomnibus 47 S.A.', value: 'Linea de Microomnibus 47 S.A.'}];
			var lineaColectivo49 = [{ text: 'Buenos Aires Bus S.A.', value: 'Buenos Aires Bus S.A.'}];
			var lineaColectivo50 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaColectivo51 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaColectivo53 = [{ text: 'Linea 213 S.A. de Transportes', value: 'Linea 213 S.A. de Transportes'}];
			var lineaColectivo55 = [{ text: 'Almafuerte S.A.T.A.C.I.', value: 'Almafuerte S.A.T.A.C.I.'}];
			var lineaColectivo56 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaColectivo57 = [{ text: 'Transportes Atlantica S.A. Comercial', value: 'Transportes Atlantica S.A. Comercial'}];
			var lineaColectivo59 = [{ text: 'Microomnibus Ciudad de Buenos Aires S.A.T.C.I.', value: 'Microomnibus Ciudad de Buenos Aires S.A.T.C.I.'}];
			var lineaColectivo60 = [{ text: 'Micro omnibus Norte S.A. (MONSA)', value: 'Micro omnibus Norte S.A. (MONSA)'}];
			var lineaColectivo61 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo62 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo63 = [{ text: 'Bernardino Rivadavia S.A.T.A.', value: 'Bernardino Rivadavia S.A.T.A.'}];
			var lineaColectivo64 = [{ text: 'Vuelta de Rocha S.A.T.A.C.I.', value: 'Vuelta de Rocha S.A.T.A.C.I.'}];
			var lineaColectivo65 = [{ text: 'La Nueva Metropol S.A.T.A.C.I.', value: 'La Nueva Metropol S.A.T.A.C.I.'}];
			var lineaColectivo67 = [{ text: 'Transportes del Tejar S.A.', value: 'Transportes del Tejar S.A.'}];
			var lineaColectivo68 = [{ text: 'Transportes Sesenta y Ocho S.R.L.', value: 'Transportes Sesenta y Ocho S.R.L.'}];
			var lineaColectivo70 = [{ text: 'Transportes 270 S.A.', value: 'Transportes 270 S.A.'}];
			var lineaColectivo71 = [{ text: 'Lina 71 S.A.', value: 'Lina 71 S.A.'}];
			var lineaColectivo74 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaColectivo75 = [{ text: 'El Puente S.A.T.', value: 'El Puente S.A.T.'}];
			var lineaColectivo76 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaColectivo78 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaColectivo79 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaColectivo80 = [{ text: 'Transportes Nueva Chicago C.I.S.A.', value: 'Transportes Nueva Chicago C.I.S.A.'}];
			var lineaColectivo84 = [{ text: 'General Tomas Guido S.A.', value: 'General Tomas Guido S.A.'}];
			var lineaColectivo85 = [{ text: 'Sociedad Anonima Expreso Sudoeste', value: 'Sociedad Anonima Expreso Sudoeste'}];
			var lineaColectivo86 = [{ text: 'DUVI S.A.', value: 'DUVI S.A.'}];
			var lineaColectivo87 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaColectivo88 = [{ text: 'Linea Expreso Liniers S.A.I.C.', value: 'Linea Expreso Liniers S.A.I.C.'}];
			var lineaColectivo90 = [{ text: 'Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)', value: 'Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)'}];
			var lineaColectivo91 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaColectivo92 = [{ text: 'Empresa de Transportes Microomnibus Saenz Pe\u00F1a S.R.L.', value: 'Empresa de Transportes Microomnibus Saenz Peña S.R.L.'}];
			var lineaColectivo93 = [{ text: 'Transportes 1º de Septiembre S.A.', value: 'Transportes 1º de Septiembre S.A.'}];
			var lineaColectivo95 = [{ text: 'Empresa Antantida Argentina S.A.T.', value: 'Empresa Antantida Argentina S.A.T.'}];
			var lineaColectivo96 = [{ text: 'Transporte Ideal San Justo S.A.', value: 'Transporte Ideal San Justo S.A.'}];
			var lineaColectivo97 = [{ text: 'Bus del Oeste S.A.', value: 'Bus del Oeste S.A.'}];
			var lineaColectivo98 = [{ text: 'Expreso Quilmes S.A.', value: 'Expreso Quilmes S.A.'}];
			var lineaColectivo99 = [{ text: 'Transportes 27 de Junio S.A.C.I.F.', value: 'Transportes 27 de Junio S.A.C.I.F.'}];
			var lineaColectivo100 = [{ text: 'Transportes Automotores Riachuelo S.A. (TARSA)', value: 'Transportes Automotores Riachuelo S.A. (TARSA)'}];
			var lineaColectivo101 = [{ text: 'DOTA S.A.', value: 'DOTA S.A.'}];
			var lineaColectivo102 = [{ text: 'Transportes Sargento Cabral Sociedad Colectiva', value: 'Transportes Sargento Cabral Sociedad Colectiva'}];
			var lineaColectivo103 = [{ text: 'Transportes Quirno Costa S.A.C.I.', value: 'Transportes Quirno Costa S.A.C.I.'}];
			var lineaColectivo104 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo105 = [{ text: 'Empresa de Transportes America S.A.C.I.', value: 'Empresa de Transportes America S.A.C.I.'}];
			var lineaColectivo106 = [{ text: 'Colectiveros Unidos S.A.I.F. (CUSA)', value: 'Colectiveros Unidos S.A.I.F. (CUSA)'}];
			var lineaColectivo107 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaColectivo108 = [{ text: 'Empresa Teniente General Roca S.A.', value: 'Empresa Teniente General Roca S.A.'}];
			var lineaColectivo109 = [{ text: 'Transportes 9 de Julio S.A.C.', value: 'Transportes 9 de Julio S.A.C.'}];
			var lineaColectivo110 = [{ text: 'General Pueyrredon S.A.T.C.I', value: 'General Pueyrredon S.A.T.C.I'}];
			var lineaColectivo111 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaColectivo112 = [{ text: 'Expreso Lomas S.A.', value: 'Expreso Lomas S.A.'}];
			var lineaColectivo113 = [{ text: 'Bernardino Rivadavia S.A.T.A.', value: 'Bernardino Rivadavia S.A.T.A.'}];
			var lineaColectivo114 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo115 = [{ text: 'Transportes Automotores Riachuelo S.A. (TARSA)', value: 'Transportes Automotores Riachuelo S.A. (TARSA)'}];
			var lineaColectivo117 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaColectivo118 = [{ text: 'Microomnibus Barrancas de Belgrano S.A.', value: 'Microomnibus Barrancas de Belgrano S.A.'}];
			var lineaColectivo123 = [{ text: 'Transportes Linea 123 S.A.C.I.', value: 'Transportes Linea 123 S.A.C.I.'}];
			var lineaColectivo124 = [{ text: 'Transportes Automotores Callao S.A.', value: 'Transportes Automotores Callao S.A.'}];
			var lineaColectivo126 = [{ text: 'Cardenas S.A. Empresa de Transportes', value: 'Cardenas S.A. Empresa de Transportes'}];
			var lineaColectivo127 = [{ text: 'Los Constituyentes S.A.T.', value: 'Los Constituyentes S.A.T.'}];
			var lineaColectivo128 = [{ text: 'El Puente S.A.T.', value: 'El Puente S.A.T.'}];
			var lineaColectivo129 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo130 = [{ text: 'Transportes Avenida Bernardo Ader S.A. (TABA)', value: 'Transportes Avenida Bernardo Ader S.A. (TABA)'}];
			var lineaColectivo132 = [{ text: 'Nuevos Rumbos S.A', value: 'Nuevos Rumbos S.A'}];
			var lineaColectivo133 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo134 = [{ text: 'Transportes Automotores Riachuelo S.A. (TARSA)', value: 'Transportes Automotores Riachuelo S.A. (TARSA)'}];
			var lineaColectivo135 = [{ text: 'Transportes Lope de Vega S.A.C.I.', value: 'Transportes Lope de Vega S.A.C.I.'}];
			var lineaColectivo136 = [{ text: 'Sargento Cabral S.A. de Transporte', value: 'Sargento Cabral S.A. de Transporte'}];
			var lineaColectivo140 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo141 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo143 = [{ text: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.', value: 'Grupo Plaza - Transporte Automotor Plaza S.A.C.I.'}];
			var lineaColectivo146 = [{ text: 'ROCARAZA S.A.', value: 'ROCARAZA S.A.'}];
			var lineaColectivo148 = [{ text: 'El Nuevo Halcon S.A.', value: 'El Nuevo Halcon S.A.'}];
			var lineaColectivo150 = [{ text: 'NUDO S.A.', value: 'NUDO S.A.'}];
			var lineaColectivo151 = [{ text: 'Micro omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)', value: 'Micro Omnibus Doscientos Ocho S.A. de Transporte Automotor (MODO)'}];
			var lineaColectivo152 = [{ text: 'Empresa Tandilense S.A.C.I.F.I.Y DE S.', value: 'Empresa Tandilense S.A.C.I.F.I.Y DE S.'}];
			var lineaColectivo153 = [{ text: 'Microomnibus Saavedra S.A. - Grupo ERSA', value: 'Microomnibus Saavedra S.A. - Grupo ERSA'}];
			var lineaColectivo154 = [{ text: 'Micro omnibus Cuarenta y Cinco S.A.C.I.F', value: 'Micro Omnibus Cuarenta y Cinco S.A.C.I.F'}];
			var lineaColectivo159 = [{ text: 'Micro Omnibus Quilmes S.A.C.I.F. (MOQSA)', value: 'Micro Omnibus Quilmes S.A.C.I.F. (MOQSA)'}];
			var lineaColectivo160 = [{ text: 'Micro omnibus Sur S.A.C.', value: 'Micro Omnibus Sur S.A.C.'}];
			var lineaColectivo161 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaColectivo163 = [{ text: 'Sargento Cabral S.A. de Transporte', value: 'Sargento Cabral S.A. de Transporte'}];
			var lineaColectivo165 = [{ text: 'Expreso Lomas S.A.', value: 'Expreso Lomas S.A.'}];
			var lineaColectivo166 = [{ text: 'Empresa Linea 216 S.A.T.', value: 'Empresa Linea 216 S.A.T.'}];
			var lineaColectivo168 = [{ text: 'Expreso San Isidro S.A. (ESISA)', value: 'Expreso San Isidro S.A. (ESISA)'}];
			var lineaColectivo169 = [{ text: 'Transporte Escalada S.A.', value: 'Transporte Escalada S.A.'}];
			var lineaColectivo172 = [{ text: 'La Caba\u00F1a S.A.', value: 'La Cabaña S.A.'}];
			var lineaColectivo172 = [{ text: 'La Caba\u00F1a S.A.', value: 'La Cabaña S.A.'}];
			var lineaColectivo175 = [{ text: 'Transporte Escalada S.A.', value: 'Transporte Escalada S.A.'}];
			var lineaColectivo176 = [{ text: 'Expreso General Sarmiento S.A.', value: 'Expreso General Sarmiento S.A.'}];
			var lineaColectivo177 = [{ text: 'Empresa San Vicente S.A.T.', value: 'Empresa San Vicente S.A.T.'}];
			var lineaColectivo178 = [{ text: 'Compa\u00F1ia de Microomnibus La Colorada S.A.C.I.', value: 'Compañia de Microomnibus La Colorada S.A.C.I.'}];
			var lineaColectivo179 = [{ text: 'Grupo Linea 179 S.A.', value: 'Grupo Linea 179 S.A.'}];
			var lineaColectivo180 = [{ text: 'La Vecinal de Matanza S.A.C.I. de Microomnibus', value: 'La Vecinal de Matanza S.A.C.I. de Microomnibus'}];
			var lineaColectivo181 = [{ text: 'Transporte Automotor de Pasajeros Siglo XXI S.A.', value: 'Transporte Automotor de Pasajeros Siglo XXI S.A.'}];
			var lineaColectivo182 = [{ text: 'Sargento Cabral S.A. de Transporte', value: 'Sargento Cabral S.A. de Transporte'}];
			var lineaColectivo184 = [{ text: 'La Central de Vicente Lopez S.A.C.', value: 'La Central de Vicente Lopez S.A.C.'}];
			var lineaColectivo185 = [{ text: 'Transporte Ideal San Justo S.A.', value: 'Transporte Ideal San Justo S.A.'}];
			var lineaColectivo188 = [{ text: 'Transporte Larrazabal C.I.S.A.', value: 'Transporte Larrazabal C.I.S.A.'}];
			var lineaColectivo193 = [{ text: 'DUVI S.A.', value: 'DUVI S.A.'}];
			var lineaColectivo194 = [{ text: 'La Nueva Metropol S.A.T.A.C.I.', value: 'La Nueva Metropol S.A.T.A.C.I.'}];
			var lineaColectivo195 = [{ text: 'La Nueva Metropol S.A.T.A.C.I.', value: 'La Nueva Metropol S.A.T.A.C.I.'}];
			
		//	var lineaColectivo = [{ text: '', value: ''}];
			if(form.tipo[7].selected){
				//Ocultando y mostrando los LABEL correspondientes a colectivo
				document.getElementById('marca').style.display="none";
				document.getElementById('linea').style.display="inline";
				document.getElementById('modelo').style.display="none";
				document.getElementById('empresa').style.display="inline";
				//Ocultando y mostrando los SELECT correspondientes a colectivo
				form.marcaSinSeleccion.style.display = "none";
				form.modeloP.style.display = "none";
				form.modeloM.style.display = "none";
				form.lineaColectivo.style.display = "inline";
				form.empresaColectivo.style.display = "inline";
				////Cambiando el valor de las marcas de otras categorías a 0 ("Seleccionar")
				$('#marcaParticular option:eq(0)').prop('selected', true);
				$('#marcaMoto option:eq(0)').prop('selected', true);
				if(form.lineaColectivo[1].selected){
					$.each(lineaColectivo1, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}				
				if(form.lineaColectivo[2].selected){
					$.each(lineaColectivo2, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}	
				if(form.lineaColectivo[3].selected){
					$.each(lineaColectivo4, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}	
				if(form.lineaColectivo[4].selected){
					$.each(lineaColectivo5, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}	
				if(form.lineaColectivo[5].selected){
					$.each(lineaColectivo6, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}	
				if(form.lineaColectivo[6].selected){
					$.each(lineaColectivo7, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[7].selected){
					$.each(lineaColectivo8, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[8].selected){
					$.each(lineaColectivo9, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[9].selected){
					$.each(lineaColectivo10, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[10].selected){
					$.each(lineaColectivo12, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[11].selected){
					$.each(lineaColectivo15, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[12].selected){
					$.each(lineaColectivo17, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[13].selected){
					$.each(lineaColectivo19, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[14].selected){
					$.each(lineaColectivo20, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[15].selected){
					$.each(lineaColectivo21, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[16].selected){
					$.each(lineaColectivo22, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[17].selected){
					$.each(lineaColectivo23, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[18].selected){
					$.each(lineaColectivo24, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[19].selected){
					$.each(lineaColectivo25, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[20].selected){
					$.each(lineaColectivo26, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[21].selected){
					$.each(lineaColectivo28, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[22].selected){
					$.each(lineaColectivo29, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[23].selected){
					$.each(lineaColectivo31, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[24].selected){
					$.each(lineaColectivo32, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[25].selected){
					$.each(lineaColectivo33, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[26].selected){
					$.each(lineaColectivo34, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[27].selected){
					$.each(lineaColectivo36, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[28].selected){
					$.each(lineaColectivo37, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[29].selected){
					$.each(lineaColectivo39, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[30].selected){
					$.each(lineaColectivo41, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[31].selected){
					$.each(lineaColectivo42, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[32].selected){
					$.each(lineaColectivo44, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[33].selected){
					$.each(lineaColectivo45, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[34].selected){
					$.each(lineaColectivo46, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[35].selected){
					$.each(lineaColectivo47, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[36].selected){
					$.each(lineaColectivo49, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[37].selected){
					$.each(lineaColectivo50, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[38].selected){
					$.each(lineaColectivo51, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[39].selected){
					$.each(lineaColectivo53, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[40].selected){
					$.each(lineaColectivo55, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[41].selected){
					$.each(lineaColectivo56, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[42].selected){
					$.each(lineaColectivo57, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[43].selected){
					$.each(lineaColectivo59, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[44].selected){
					$.each(lineaColectivo60, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[45].selected){
					$.each(lineaColectivo61, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[46].selected){
					$.each(lineaColectivo62, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[47].selected){
					$.each(lineaColectivo63, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[48].selected){
					$.each(lineaColectivo64, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[49].selected){
					$.each(lineaColectivo65, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[50].selected){
					$.each(lineaColectivo67, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[51].selected){
					$.each(lineaColectivo68, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[52].selected){
					$.each(lineaColectivo70, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[53].selected){
					$.each(lineaColectivo71, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}if(form.lineaColectivo[54].selected){
					$.each(lineaColectivo74, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[55].selected){
					$.each(lineaColectivo75, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[56].selected){
					$.each(lineaColectivo76, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[57].selected){
					$.each(lineaColectivo78, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[58].selected){
					$.each(lineaColectivo79, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[59].selected){
					$.each(lineaColectivo80, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[60].selected){
					$.each(lineaColectivo84, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[61].selected){
					$.each(lineaColectivo85, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[62].selected){
					$.each(lineaColectivo86, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[63].selected){
					$.each(lineaColectivo87, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[64].selected){
					$.each(lineaColectivo88, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[65].selected){
					$.each(lineaColectivo90, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[66].selected){
					$.each(lineaColectivo91, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[67].selected){
					$.each(lineaColectivo92, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[68].selected){
					$.each(lineaColectivo93, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[69].selected){
					$.each(lineaColectivo95, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[70].selected){
					$.each(lineaColectivo96, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[71].selected){
					$.each(lineaColectivo97, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[72].selected){
					$.each(lineaColectivo98, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[73].selected){
					$.each(lineaColectivo99, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[74].selected){
					$.each(lineaColectivo100, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[75].selected){
					$.each(lineaColectivo101, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[76].selected){
					$.each(lineaColectivo102, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[77].selected){
					$.each(lineaColectivo103, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[78].selected){
					$.each(lineaColectivo104, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[79].selected){
					$.each(lineaColectivo105, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[80].selected){
					$.each(lineaColectivo106, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[81].selected){
					$.each(lineaColectivo107, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[82].selected){
					$.each(lineaColectivo108, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[83].selected){
					$.each(lineaColectivo109, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[84].selected){
					$.each(lineaColectivo110, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[85].selected){
					$.each(lineaColectivo111, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[86].selected){
					$.each(lineaColectivo112, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[87].selected){
					$.each(lineaColectivo113, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[88].selected){
					$.each(lineaColectivo114, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}if(form.lineaColectivo[89].selected){
					$.each(lineaColectivo115, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[90].selected){
					$.each(lineaColectivo117, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[91].selected){
					$.each(lineaColectivo118, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[92].selected){
					$.each(lineaColectivo123, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[93].selected){
					$.each(lineaColectivo124, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[94].selected){
					$.each(lineaColectivo126, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[95].selected){
					$.each(lineaColectivo127, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[96].selected){
					$.each(lineaColectivo128, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[97].selected){
					$.each(lineaColectivo129, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[98].selected){
					$.each(lineaColectivo130, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[99].selected){
					$.each(lineaColectivo132, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[100].selected){
					$.each(lineaColectivo133, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[101].selected){
					$.each(lineaColectivo134, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[102].selected){
					$.each(lineaColectivo135, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[103].selected){
					$.each(lineaColectivo136, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[104].selected){
					$.each(lineaColectivo140, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[105].selected){
					$.each(lineaColectivo141, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[106].selected){
					$.each(lineaColectivo143, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[107].selected){
					$.each(lineaColectivo146, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[108].selected){
					$.each(lineaColectivo148, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[109].selected){
					$.each(lineaColectivo150, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[110].selected){
					$.each(lineaColectivo151, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[111].selected){
					$.each(lineaColectivo152, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[112].selected){
					$.each(lineaColectivo153, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[113].selected){
					$.each(lineaColectivo154, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[114].selected){
					$.each(lineaColectivo159, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[115].selected){
					$.each(lineaColectivo160, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[116].selected){
					$.each(lineaColectivo161, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[117].selected){
					$.each(lineaColectivo163, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[118].selected){
					$.each(lineaColectivo165, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[119].selected){
					$.each(lineaColectivo166, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}if(form.lineaColectivo[120].selected){
					$.each(lineaColectivo168, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[121].selected){
					$.each(lineaColectivo169, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[122].selected){
					$.each(lineaColectivo172, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}if(form.lineaColectivo[123].selected){
					$.each(lineaColectivo174, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[124].selected){
					$.each(lineaColectivo175, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[125].selected){
					$.each(lineaColectivo176, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[126].selected){
					$.each(lineaColectivo177, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[127].selected){
					$.each(lineaColectivo178, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[128].selected){
					$.each(lineaColectivo179, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[129].selected){
					$.each(lineaColectivo180, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[130].selected){
					$.each(lineaColectivo181, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[131].selected){
					$.each(lineaColectivo182, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[132].selected){
					$.each(lineaColectivo184, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[133].selected){
					$.each(lineaColectivo185, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[134].selected){
					$.each(lineaColectivo188, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[135].selected){
					$.each(lineaColectivo193, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[136].selected){
					$.each(lineaColectivo194, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
				}
				if(form.lineaColectivo[137].selected){
					$.each(lineaColectivo195, function(i, el) 
							{    $('#empresaColectivo').append( new Option(el.text,el.value) );});
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

	     function desactivarInput(){  
	    	 document.getElementById("dominio").value = "";
	          if(document.getElementById("chequeable").checked == true){  
	              document.getElementById("dominio").disabled = true;
	          }else{
	            document.getElementById("dominio").disabled = false;
	          }  
	     }  		
		