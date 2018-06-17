var searchIndex = {};
searchIndex["wafer"] = {"doc":"Wa ve f unction Solv er: a parallelized, 3D, Schrödinger equation solver.","items":[[5,"sha","wafer","Generate a SHA string",null,{"inputs":[],"output":{"name":"str"}}],[5,"short_sha","","Generate a short SHA string",null,{"inputs":[],"output":{"name":"str"}}],[5,"exit_with_pause","","Exits (with error, but no display) after a short pause. Because we're using async logs, sometimes we dump before the log system outputs information. We spool for a little first in these instances so we get the logging info.",null,{"inputs":[],"output":null}],[5,"main","","System entry point",null,{"inputs":[],"output":null}],[0,"config","","Config is a (mostly) public module which reads the configuration file `wafer.cfg` and populates the `Config` struct with the information required to run the current instance of the application.",null,null],[3,"Grid","wafer::config","Grid size information.",null,null],[12,"size","","Number of grid points (Cartesian coordinates).",0,null],[12,"dn","","The spatial grid size, i.e. Δ{x,y,z}.",0,null],[12,"dt","","The temporal step size, i.e. Δτ.",0,null],[3,"Point3","","A data point in 3D space.",null,null],[12,"x","","Position in x.",1,null],[12,"y","","Position in y.",1,null],[12,"z","","Position in z.",1,null],[3,"Index3","","A simple index struct to identify an {x,y,z} position.",null,null],[12,"x","","Index in x.",2,null],[12,"y","","Index in y.",2,null],[12,"z","","Index in z.",2,null],[3,"Output","","Identifies the frequency of output to the screen or disk, as well as toggling the output of wavefunction and potential data.",null,null],[12,"screen_update","","How many steps should the system evolve before outputting information to the screen.",3,null],[12,"snap_update","","Optional: How many steps should the system evolve before saving a partially converged wavefunction.",3,null],[12,"file_type","","File format to be used for output. `Messagepack` is the smallest (and fastest) option, but not human readable. Structured text options are `json` and `yaml`, then for a complete plain text option there is `csv`.",3,null],[12,"save_wavefns","","Should wavefunctions be saved at all? Not necessary if energy values are the only interest. Each excited state is saved once it is converged or if `max_steps` is reached.",3,null],[12,"save_potential","","Should the potential be saved for reference? This is output at the start of the simulation.",3,null],[3,"Config","","The main struct which all input data from `wafer.cfg` is pushed into.",null,null],[12,"project_name","","A name for the current project for easy identification of output files.",4,null],[12,"grid","","Information about the required grid to calculate on.",4,null],[12,"tolerance","","A convergence value, how accurate the total energy needs to be.",4,null],[12,"central_difference","","Precision of the central difference formalism. The higher the value here the lower the resultant error will be, provided the step size has been optimally chosen.",4,null],[12,"max_steps","","Optional: The maximum amount of steps the solver should attempt before giving up.",4,null],[12,"wavenum","","A starting number pertaining to an excited state energy level. To start at the ground state, this number should be 0. If it is higher, the solver expects converged states in the `input` directory before calculating anything.",4,null],[12,"wavemax","","The maximum number of excited states to calculate. For example, if this value is 2, the solver will calculate the ground state (E_0), first excited (E_1) and second excited (E_2) states.",4,null],[12,"output","","Information about the requested output data.",4,null],[12,"potential","","The type of potential required for the simulation. This can be from the internal list, directly from a pre-calculated file or from a python script.",4,null],[12,"mass","","Atomic mass if required by the selected potential.",4,null],[12,"init_condition","","A first guess at the wavefunction. Can range from Gaussian noise to a low resolution, pre-calculated solution which will be scaled up to enable a faster convergence at high resolution.",4,null],[12,"sig","","Standard deviation. This sets sigma for the Gaussian initial condition if used and is also required for the Cornell potential types.",4,null],[12,"init_symmetry","","Symmetry conditions forced upon the wavefuntion.",4,null],[12,"script_location","","Location of the script if using one. This is not required in the input configuration and will be set as a default value or derived from command line arguments.",4,null],[4,"PotentialType","","Type of potential the user wishes to invoke. There are many potentials built in, or the user can opt for two (three) external possibilities:",null,null],[13,"NoPotential","","V = 0, no potential at all.",5,null],[13,"Cube","","A 3D square (i.e. cubic) well.",5,null],[13,"QuadWell","","Quad well, with short side along the z-axis.",5,null],[13,"Periodic","","Periodic (sin squared).",5,null],[13,"Coulomb","","Standard Coulomb.",5,null],[13,"ComplexCoulomb","","Complex Coulomb.",5,null],[13,"ElipticalCoulomb","","Elliptical Coulomb.",5,null],[13,"SimpleCornell","","Cornell with no corrections.",5,null],[13,"FullCornell","","Fully anisotropic screened Cornell + spin correction.",5,null],[13,"Harmonic","","Harmonic oscillator.",5,null],[13,"ComplexHarmonic","","Complex harmonic oscillator.",5,null],[13,"Dodecahedron","","Dodecahedron, because this totally exists in nature.",5,null],[13,"FromFile","","Pull data from file. Good to save a little startup time on restart runs, or a more complex potential generated from an external tool.",5,null],[13,"FromScript","","Calls a python script the user can implement.",5,null],[4,"InitialCondition","","Defines the type of initial condition, or first guess, given to the wavefunction.",null,null],[13,"FromFile","","Data will be pulled from file. This could be pre-calculated data from some inferior wavefunction solver, or more likely than not one of two other options.",6,null],[13,"Gaussian","","A random value from the Gaussian distribution, using the standard deviation `sig`.",6,null],[13,"Coulomb","","Coulomb-like.",6,null],[13,"Constant","","A constant value of 0.1.",6,null],[13,"Boolean","","A Boolean test grid, good for benchmarks.",6,null],[4,"SymmetryConstraint","","Symmetry of the wavefunction can be constrained to assist calculation.",null,null],[13,"NotConstrained","","Don't constrain system at all.",7,null],[13,"AboutZ","","Symmetric about z-axis.",7,null],[13,"AntisymAboutZ","","Antisymmetric about z-axis.",7,null],[13,"AboutY","","Symmetric about y-axis.",7,null],[13,"AntisymAboutY","","Antisymmetric about y-axis.",7,null],[4,"CentralDifference","","Sets the precision of the central difference formalism.",null,null],[13,"ThreePoint","","3 point, good to 𝓞(`grid.dn`²).",8,null],[13,"FivePoint","","5 point, good to 𝓞(`grid.dn`⁴).",8,null],[13,"SevenPoint","","7 point, good to 𝓞(`grid.dn`⁶).",8,null],[4,"FileType","","File formats available for data output.",null,null],[13,"Messagepack","","Messagepack: a binary option. Small file sizes (comparatively), but not human readable - can be converted to be however.",9,null],[13,"Csv","","CSV: a plain text file with comma separated values.",9,null],[13,"Json","","JSON: a popular structured text format found on the web, but also good for Wafer output.",9,null],[13,"Yaml","","YAML: another structured text format that is a little more feature rich than JSON.",9,null],[13,"Ron","","RON: Rusty Object Notation is a structured text format designed to encapsulate Rust syntax.",9,null],[5,"set_initial_conditions","","Sets initial conditions for the wavefunction `w`.",null,{"inputs":[{"name":"config"},{"name":"logger"}],"output":{"generics":["array3","error"],"name":"result"}}],[5,"generate_gaussian","","Builds a gaussian distribution of values with a mean of 0 and standard distribution of `config.sig`.",null,null],[5,"generate_coulomb","","Builds a Coulomb-like initial condition.",null,null],[5,"generate_boolean","","Builds a Boolean test grid initial condition.",null,null],[5,"symmetrise_wavefunction","","Enforces symmetry conditions on wavefunctions",null,{"inputs":[{"name":"config"},{"name":"array3"}],"output":null}],[17,"_IMPL_SERIALIZE_FOR_Grid","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_Grid","","",null,null],[17,"_IMPL_SERIALIZE_FOR_Point3","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_Point3","","",null,null],[17,"_IMPL_SERIALIZE_FOR_Index3","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_Index3","","",null,null],[17,"_IMPL_SERIALIZE_FOR_Output","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_Output","","",null,null],[17,"_IMPL_SERIALIZE_FOR_PotentialType","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_PotentialType","","",null,null],[17,"_IMPL_SERIALIZE_FOR_InitialCondition","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_InitialCondition","","",null,null],[17,"_IMPL_SERIALIZE_FOR_SymmetryConstraint","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_SymmetryConstraint","","",null,null],[17,"_IMPL_SERIALIZE_FOR_CentralDifference","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_CentralDifference","","",null,null],[17,"_IMPL_SERIALIZE_FOR_FileType","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_FileType","","",null,null],[17,"_IMPL_SERIALIZE_FOR_Config","","",null,null],[17,"_IMPL_DESERIALIZE_FOR_Config","","",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"potentialtype"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"variable_pot_sub","","Returns true if `potential_sub` has a non-constant response function",5,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"initialcondition"}],"output":{"name":"bool"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bb","","Grabs the B ounding B ox size for the current precision.",8,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"ext","","Grabs how much the work area is extended in one direction for the current precision.",8,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"extentsion","","Returns the file extension of the current output type.",9,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"load","","Reads and parses data from the `wafer.yaml` file and command line arguments.",4,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"generics":["config","error"],"name":"result"}}],[11,"parse","","Additional checks to the configuration file that cannot be done implicitly by the type checker.",4,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"result"}}],[11,"print","","Pretty prints the Config contents to stdout.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[0,"grid","wafer","The meat of the calculation is performed on a finite grid. Basically all of the computation work is done within this module.",null,null],[3,"Observables","wafer::grid","Holds all computed observables for the current wavefunction.",null,null],[12,"energy","","Normalised total energy.",10,null],[12,"norm2","","A squared normalisation. Square root occurs later when needed to apply a complete normalisation condition. This needs to be separate as we include other adjustments from time to time.",10,null],[12,"v_infinity","","The value of the potential at infinity. This is used to calculate the binding energy.",10,null],[12,"r2","","Coefficient of determination",10,null],[5,"run","","Runs the calculation and holds long term (system time) wavefunction storage",null,{"inputs":[{"name":"config"},{"name":"logger"},{"name":"usize"}],"output":{"generics":["error"],"name":"result"}}],[5,"solve","","Runs the actual computation once system is setup and ready.",null,{"inputs":[{"name":"config"},{"name":"logger"},{"name":"usize"},{"name":"potentials"},{"name":"u8"},{"name":"vec"}],"output":{"generics":["error"],"name":"result"}}],[5,"eta","","Estimates completion time for the convergence of the current wavefunction.",null,{"inputs":[{"name":"u64"},{"name":"f64"},{"name":"f64"},{"name":"config"}],"output":{"generics":["f64"],"name":"option"}}],[5,"compute_observables","","Computes observable values of the system, for example the energy",null,{"inputs":[{"name":"config"},{"name":"potentials"},{"name":"array3"}],"output":{"name":"observables"}}],[5,"get_norm_squared","","Calculate the normalisation condition of a wavefunction. The square root portion of this calculation happens later as we sometimes require just this condition.",null,{"inputs":[{"name":"arrayview3"}],"output":{"name":"f64"}}],[5,"normalise_wavefunction","","Normalisation of the wavefunction",null,{"inputs":[{"name":"array3"},{"name":"f64"}],"output":null}],[5,"orthogonalise_wavefunction","","Uses Gram Schmidt orthogonalisation to identify the next excited state's wavefunction, even if it's degenerate",null,null],[5,"get_work_area","","Shortcut to getting a slice of the workable area of the current array. In other words, the finite element only cells are removed",null,{"inputs":[{"name":"array3"},{"name":"usize"}],"output":{"generics":["f64"],"name":"arrayview3"}}],[5,"get_mut_work_area","","Shortcut to getting a mutable slice of the workable area of the current array. In other words, the finite element only cells are removed",null,{"inputs":[{"name":"array3"},{"name":"usize"}],"output":{"generics":["f64"],"name":"arrayviewmut3"}}],[5,"evolve","","Evolves the solution a number of `steps`",null,null],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"input","wafer","Any required file input (apart from configuration) is handled here. Plain text and binary formats.",null,null],[3,"PlainRecord","wafer::input","A simple struct to parse data from a plain csv file",null,null],[12,"i","","Index in x",11,null],[12,"j","","Index in y",11,null],[12,"k","","Index in z",11,null],[12,"data","","Data at this position",11,null],[5,"check_potential_file","","Checks if a potential file exists in the input directory",null,{"inputs":[{"name":"str"}],"output":{"generics":["string"],"name":"option"}}],[5,"check_potential_sub_file","","Checks if a potential_sub file exists in the input directory",null,{"inputs":[{"name":"str"}],"output":{"generics":["string"],"name":"option"}}],[5,"potential","","Loads potential file from disk. Handles cases where multiple files exist.",null,null],[5,"read_mpk","","Loads an array from a mpk file on disk.",null,null],[5,"read_json","","Loads an array from a json file on disk.",null,null],[5,"read_yaml","","Loads an array from a yaml file on disk.",null,null],[5,"read_ron","","Loads an array from a ron file on disk.",null,null],[5,"fill_data","","Once data has been pulled from disk into a convertable format, we contstruct an array ready to calculate on. This requires the addition of a central difference buffer zone and may require the data to be resampled if input sizes differ from the size of the data on disk.",null,null],[5,"script_potential","","Loads potential file from a script.",null,{"inputs":[{"name":"str"},{"name":"grid"},{"name":"usize"},{"name":"logger"}],"output":{"generics":["array3","error"],"name":"result"}}],[5,"potential_sub","","Loads potential_sub file from disk. Handles cases where multiple files exist.",null,null],[5,"read_sub_mpk","","Loads a potential_sub value or array from a messagepack file on disk.",null,null],[5,"read_sub_csv","","Loads a potential_sub value or array from a csv file on disk.",null,null],[5,"read_sub_json","","Loads a potential_sub value or array from a json file on disk.",null,null],[5,"read_sub_yaml","","Loads a potential_sub value or array from a yaml file on disk.",null,null],[5,"read_sub_ron","","Loads a potential_sub value or array from a ron file on disk.",null,null],[5,"fill_sub_data","","Returns a variable array of `potential_sub` data, which is resized if needed.",null,null],[5,"load_wavefunctions","","Loads previously computed wavefunctions from disk.",null,{"inputs":[{"name":"config"},{"name":"logger"},{"name":"vec"}],"output":{"generics":["error"],"name":"result"}}],[5,"check_wavefunction_file","","Checks if a wavefunction file exists in the input directory",null,{"inputs":[{"name":"u8"},{"name":"str"}],"output":{"generics":["string"],"name":"option"}}],[5,"wavefunction","","Loads wavefunction file from disk. Handles cases where multiple files exist.",null,null],[5,"check_input_dir","","Checks that the folder `input` exists. If not, creates it. This doesn't specifically need to happen for all instances, but we may want to put restart values in there later on.",null,{"inputs":[],"output":{"generics":["error"],"name":"result"}}],[5,"read_csv","","Given a filename, this function reads in the data of a csv file and parses the values into a 3D array. There are a few caveats to this as the file may be of a different shape to the requested size in the configuration file. The routine therefore attempts to resample/interpolate the data to fit the required parameters.",null,null],[5,"trilerp_resize","","Trilinear interpolation to resize an array. i.e, if we have v.size = (50,50,50), and size = (100, 100, 100) then the output will be (100,100,100) linearly interpolated",null,null],[17,"_IMPL_DESERIALIZE_FOR_PlainRecord","","",null,null],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"output","wafer","All file output is handled in this module. Plain text and binary options are both here.",null,null],[3,"PROJDATE","wafer::output","Date & time at which the simulation was started. Used as a unique identifier for the output directory of a run.",null,null],[12,"__private_field","","",12,null],[3,"TERMWIDTH","","Width of program output to screen.",null,null],[12,"__private_field","","",13,null],[3,"ObservablesOutput","","Structured output of observable values",null,null],[12,"state","","Excited state number.",14,null],[12,"energy","","Total energy.",14,null],[12,"binding_energy","","Binding energy.",14,null],[12,"r","","Coefficient of determination",14,null],[12,"l_r","","Grid size / Coefficient of determination",14,null],[3,"PlainRecord","","A simple struct to parse data to a plain csv file",null,null],[12,"i","","Index in x",15,null],[12,"j","","Index in y",15,null],[12,"k","","Index in z",15,null],[12,"data","","Data at this position",15,null],[5,"print_banner","","Simply prints the Wafer banner with current commit info and thread count.",null,{"inputs":[{"name":"str"}],"output":null}],[5,"potential","","Handles the saving of potential data to disk.",null,{"inputs":[{"name":"arrayview3"},{"name":"str"},{"name":"filetype"}],"output":{"generics":["error"],"name":"result"}}],[5,"potential_sub","","Handles the saving of potential_sub data to disk (if required).",null,{"inputs":[{"name":"config"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_csv","","Outputs an array to disk in a plain, csv format",null,{"inputs":[{"name":"arrayview3"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_mpk","","Outputs an array to disk in the messagepack binary format",null,{"inputs":[{"name":"arrayview3"},{"name":"str"},{"name":"errorkind"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_json","","Outputs an array to disk in json format",null,{"inputs":[{"name":"arrayview3"},{"name":"str"},{"name":"errorkind"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_yaml","","Outputs an array to disk in yaml format",null,{"inputs":[{"name":"arrayview3"},{"name":"str"},{"name":"errorkind"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_ron","","Outputs an array to disk in ron format",null,{"inputs":[{"name":"arrayview3"},{"name":"str"},{"name":"errorkind"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_sub_mpk","","Outputs a potential_sub to disk in messagepack format",null,{"inputs":[{"name":"option"},{"generics":["f64"],"name":"option"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_sub_csv","","Outputs a potential_sub to disk in csv format",null,{"inputs":[{"name":"option"},{"generics":["f64"],"name":"option"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_sub_json","","Outputs a potential_sub to disk in json format",null,{"inputs":[{"name":"option"},{"generics":["f64"],"name":"option"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_sub_yaml","","Outputs a potential_sub to disk in yaml format",null,{"inputs":[{"name":"option"},{"generics":["f64"],"name":"option"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"write_sub_ron","","Outputs a potential_sub to disk in ron format",null,{"inputs":[{"name":"option"},{"generics":["f64"],"name":"option"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"wavefunction","","Saves a wavefunction to disk, and controls what format (plain text or binary) the data should be handled as.",null,{"inputs":[{"name":"arrayview3"},{"name":"u8"},{"name":"bool"},{"name":"str"},{"name":"filetype"}],"output":{"generics":["error"],"name":"result"}}],[5,"remove_partial","","Removes a temporary `_partial` file from the current output directory. Should only be called if a converged file is written.",null,{"inputs":[{"name":"u8"},{"name":"str"},{"name":"filetype"}],"output":{"generics":["error"],"name":"result"}}],[5,"print_observable_header","","Pretty prints a header for the subsequent observable data",null,{"inputs":[{"name":"u8"}],"output":null}],[5,"print_measurements","","Pretty prints measurements at current step to screen",null,{"inputs":[{"name":"f64"},{"name":"f64"},{"name":"observables"}],"output":{"name":"string"}}],[5,"finalise_measurement","","Sets up the final measurements for each wavefunction, printing them to screen and saving them to disk.",null,{"inputs":[{"name":"observables"},{"name":"u8"},{"name":"f64"},{"name":"str"},{"name":"filetype"}],"output":{"generics":["error"],"name":"result"}}],[5,"print_summary","","Pretty print final summary",null,{"inputs":[{"name":"observablesoutput"}],"output":null}],[5,"observables_mpk","","Saves the observables to a messagepack binary file.",null,{"inputs":[{"name":"observablesoutput"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"observables_csv","","Saves the observables to a plain csv file.",null,{"inputs":[{"name":"observablesoutput"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"observables_json","","Saves the observables to a json file.",null,{"inputs":[{"name":"observablesoutput"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"observables_yaml","","Saves the observables to a yaml file.",null,{"inputs":[{"name":"observablesoutput"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"observables_ron","","Saves the observables to a ron file.",null,{"inputs":[{"name":"observablesoutput"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"check_output_dir","","Generates a unique folder inside an `output` directory for the current simulation.",null,{"inputs":[{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"get_project_dir","","Each simulation has a unique folder output so as not to overwrite other instances. This function gets the name of the current folder.",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"copy_config","","Copies the current configuration file to the project folder",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"generics":["error"],"name":"result"}}],[5,"get_term_size","","Uses `term_size` to pull in the terminal width and from there sets the output pretty printing value to an appropriate value (between 70-100).",null,{"inputs":[],"output":{"name":"usize"}}],[5,"sanitize_string","","Sanitizes strings such that they will create safe filenames. For now, only used with the `project_name` variable in the configuration.",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[7,"PROJDATE","","",null,null],[7,"TERMWIDTH","","",null,null],[17,"_IMPL_SERIALIZE_FOR_ObservablesOutput","","",null,null],[17,"_IMPL_SERIALIZE_FOR_PlainRecord","","",null,null],[11,"deref","","",12,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"initialize","","",12,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",13,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"initialize","","",13,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"potential","wafer","Handles the potential generation, binding energy offsets, callouts to files or scripts if needed etc.",null,null],[3,"Potentials","wafer::potential","Holds the potential arrays for the current simulation.",null,null],[12,"v","","The potential.",16,null],[12,"a","","Ancillary array `a`.",16,null],[12,"b","","Ancillary array `b`.",16,null],[12,"pot_sub","","Potsub value.",16,null],[3,"PotentialSubSingle","","A single value struct for potential_sub outputs that do not require an entire array.",null,null],[12,"pot_sub","","Value of `potential_sub` for the current potential.",17,null],[5,"generate","","A public wrapper around `potential`. Where `potential` does the calculation for a single point, `generate` builds the entire grid.",null,{"inputs":[{"name":"config"}],"output":{"generics":["array3","error"],"name":"result"}}],[5,"load_arrays","","Handles the potential loading from file, or generating depending on configuration Ancillary arrays are also generated here.",null,{"inputs":[{"name":"config"},{"name":"logger"}],"output":{"generics":["potentials","error"],"name":"result"}}],[5,"potential","","Generates a potential for the current simulation at a particular index point.",null,{"inputs":[{"name":"config"},{"name":"index3"}],"output":{"generics":["f64","error"],"name":"result"}}],[5,"potential_sub_idx","","Calculate binding energy offset (if any). Follows the `potential` input/output arguments. Used if calculation requires indexing. If not, call `potential_sub` instead. Currency only `FullCornell` requires this routine.",null,{"inputs":[{"name":"config"},{"name":"index3"}],"output":{"generics":["f64","error"],"name":"result"}}],[5,"potential_sub","","Calculate binding energy offset (if any). Follows the `potential` input/output arguments. `FullCornell`, and subsequent potentials that require indexed values must call `potential_sub_idx`.",null,{"inputs":[{"name":"config"}],"output":{"generics":["f64","error"],"name":"result"}}],[5,"calculate_r2","","Calculates squared distance",null,{"inputs":[{"name":"index3"},{"name":"grid"}],"output":{"name":"f64"}}],[5,"alphas","","Running coupling. Used for Cornell potentials.",null,{"inputs":[{"name":"f64"}],"output":{"name":"f64"}}],[5,"mu","","Debye screening mass. Used for Cornell potentials.",null,{"inputs":[{"name":"f64"}],"output":{"name":"f64"}}],[17,"_IMPL_DESERIALIZE_FOR_PotentialSubSingle","","",null,null],[17,"_IMPL_SERIALIZE_FOR_PotentialSubSingle","","",null,null],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",17,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"errors","wafer","Handles the error chain of the program.",null,null],[3,"Error","wafer::errors","The Error type.",null,null],[12,"0","","The kind of the error.",18,null],[12,"1","","Contains the error chain and the backtrace.",18,null],[4,"ErrorKind","","The kind of an error.",null,null],[13,"Msg","","A convenient variant for String.",19,null],[13,"ConfigLoad","","",19,null],[13,"ConfigParse","","",19,null],[13,"SetInitialConditions","","",19,null],[13,"LargeDt","","",19,null],[13,"LargeWavenum","","",19,null],[13,"CreateLog","","",19,null],[13,"FileNotFound","","",19,null],[13,"CreateInputDir","","",19,null],[13,"CreateOutputDir","","",19,null],[13,"CreateFile","","",19,null],[13,"ReadFile","","",19,null],[13,"ParseFloat","","",19,null],[13,"ParsePotentialSubSingle","","",19,null],[13,"ParsePlainRecord","","",19,null],[13,"ArrayShape","","",19,null],[13,"StdIn","","",19,null],[13,"StdOut","","",19,null],[13,"SpawnPython","","",19,null],[13,"SaveObservables","","",19,null],[13,"SavePotential","","",19,null],[13,"SavePotentialSub","","",19,null],[13,"WrongPotentialSubDims","","",19,null],[13,"SaveWavefunction","","",19,null],[13,"Serialize","","",19,null],[13,"Deserialize","","",19,null],[13,"Flush","","",19,null],[13,"MaxStep","","",19,null],[13,"PotentialNotAvailable","","",19,null],[13,"ScriptNotFound","","",19,null],[13,"CopyConfig","","",19,null],[13,"LoadWavefunction","","",19,null],[13,"LoadPotential","","",19,null],[13,"DeletePartial","","",19,null],[13,"__Nonexhaustive","","",19,null],[6,"Result","","Convenient wrapper around `std::Result`.",null,null],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with this crate.",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns some type that can be converted to `ErrorKind`, boxes the original error to store as the cause, then returns a new error containing the original error.",20,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"generics":["error"],"name":"result"}}],[11,"fmt","","",18,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",18,{"inputs":[{"name":"errorkind"},{"name":"state"}],"output":{"name":"error"}}],[11,"from_kind","","",18,null],[11,"with_chain","","",18,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"self"}}],[11,"kind","","",18,null],[11,"iter","","",18,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"chain_err","","",18,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[11,"backtrace","","",18,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"extract_backtrace","","",18,{"inputs":[{"name":"error"}],"output":{"generics":["arc"],"name":"option"}}],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",18,{"inputs":[{"name":"errorkind"}],"output":{"name":"error"}}],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",18,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"error"}}],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a kind, and generates a backtrace",18,{"inputs":[{"generics":["error"],"name":"box"},{"name":"k"}],"output":{"name":"error"}}],[11,"kind","","Returns the kind of the error.",18,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"iter","","Iterates over the error chain.",18,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"backtrace","","Returns the backtrace associated with this error.",18,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"chain_err","","Extends the error chain with a new entry.",18,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"error"}}],[11,"description","","",18,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",18,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"fmt","","",18,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",18,{"inputs":[{"name":"errorkind"}],"output":{"name":"self"}}],[11,"from","","",18,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",18,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"deref","","",18,null],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","A string describing the error kind.",19,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",19,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",19,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",19,{"inputs":[{"name":"error"}],"output":{"name":"self"}}]],"paths":[[3,"Grid"],[3,"Point3"],[3,"Index3"],[3,"Output"],[3,"Config"],[4,"PotentialType"],[4,"InitialCondition"],[4,"SymmetryConstraint"],[4,"CentralDifference"],[4,"FileType"],[3,"Observables"],[3,"PlainRecord"],[3,"PROJDATE"],[3,"TERMWIDTH"],[3,"ObservablesOutput"],[3,"PlainRecord"],[3,"Potentials"],[3,"PotentialSubSingle"],[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"]]};
initSearch(searchIndex);