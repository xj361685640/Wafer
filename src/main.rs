//! **Wa** ve **f** unction Solv **er**: a parallelized, 3D, Schrödinger equation solver.
//!
//! Wafer exploits a Wick-rotated time-dependent Schrödinger equation to solve for
//! time-independent solutions in three dimensions.
//!
//! Inspired by [quantumfdtd](http://sourceforge.net/projects/quantumfdtd/),
//! which is a proof of concept tool and falls short of a general purpose utility.
//! Wafer attempts to remedy this issue.
//!
//! If you use Wafer in your research, please reference the following articles:
//!
//! M. Strickland and D. Yager-Elorriaga, “A parallel algorithm for solving the 3d
//! Schrödinger equation”,
//! [Journal of Computational Physics __229__, 6015–6026 (2010)](http://dx.doi.org/10.1016/j.jcp.2010.04.032).


#![cfg_attr(feature="clippy", feature(plugin))]
#![cfg_attr(feature="clippy", plugin(clippy))]

extern crate ansi_term;
#[macro_use(s)]
extern crate ndarray;
extern crate ndarray_parallel;
extern crate num;
extern crate rand;
extern crate rayon;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;
extern crate term_size;

use std::time::Instant;
use ansi_term::Colour::Blue;
use config::Config;

include!(concat!(env!("OUT_DIR"), "/version.rs"));

/// Config is a (mostly) public module which reads the configuration file `wafer.cfg`
/// and poplulates the `Config` struct with the information required to run the current
/// instance of the application.
pub mod config;
mod grid;
mod potential;

/// Uses **term_size** to pull in the terminal width and from there sets the output
/// pretty printing value to an appropreate value (between 70-100). Also sets the
/// sha length for the banner output.
fn get_term_size() -> (usize, String) {
    let mut sha = sha();
    let mut term_width = 100;
    if let Some((width, _)) = term_size::dimensions() {
        if width <= 97 {
            sha = short_sha();
        }
        if width <= 70 {
            term_width = 70;
        } else if width < term_width {
            term_width = width;
        }
    }
    (term_width, sha.to_string())
}

/// Simply prints the Wafer banner with current commit info and thread count.
fn print_banner(sha: String) {
    println!("                    {}", Blue.paint("___"));
    println!("   __      ____ _  {}__ _ __", Blue.paint("/ __\\"));
    println!("   \\ \\ /\\ / / _` |{} / _ \\ '__|", Blue.paint("/ /"));
    println!("    \\ V  V / (_| {}|  __/ |    Current build SHA1: {}",
             Blue.paint("/ _\\"),
             sha);
    println!("     \\_/\\_/ \\__,{}   \\___|_|    Parallel tasks running on {} threads.",
             Blue.paint("/ /"),
             rayon::current_num_threads());
    println!("              {}", Blue.paint("\\__/"));
    println!("");
}

/// Fills potential and wavefunction variables with the required initial conditions
/// Reads from disk if need be due to user input from the configuration file. Writes
/// output if this also has been requested.
///
/// # Arguments
///
/// * `config` - The configuration struct for the programs current instance.
fn initialise(config: &Config) {
    let potentials = grid::load_potential_arrays(config);

    if config.output.save_potential {
        //TODO: Build output routine.
        //Not sure if we should use someting like messagepack as there are matlab
        //and python bindings, or try for hdf5. The rust bindings there are pretty
        //shonky. So not sure. We'll need a text only option anyhow, so build that fist.
    }

    if config.wavenum > 0 {
        //TODO: We restart from an output file.
    }

    config::set_initial_conditions(config);
}

fn main() {

    let start_time = Instant::now();

    let (term_width, sha) = get_term_size();
    print_banner(sha);

    let config = Config::load();
    config.print(term_width);

    initialise(&config);

    let elapsed = start_time.elapsed();
    let time_taken = (elapsed.as_secs() as f64) + (elapsed.subsec_nanos() as f64 / 1000_000_000.0);
    println!("Elapsed time: {} seconds.", time_taken);
}

#[cfg(test)]
mod tests {
    #[test]
    fn placeholder() {
        let num = 5;
        assert_eq!(num, 5);
    }
}
